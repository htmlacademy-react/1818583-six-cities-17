import {MainPage} from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {Page404} from '../../pages/page-404/page-404.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {APP_PAGES} from '../../const.ts';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {checkAuthAction, fetchOffersAction} from '../../api/actions.ts';
import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {Spinner} from '../spinner/spinner.tsx';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch.ts';
import {AuthStatus} from '../../api/const.ts';

function App() {
  const loading = useAppSelector((state) => state.loading);
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  if (loading || authStatus === AuthStatus.UNKNOWN) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={APP_PAGES.MAIN} element={<MainPage />}/>
      <Route path={APP_PAGES.LOGIN} element={<LoginPage />}/>
      <Route path={APP_PAGES.FAVORITES} element={
        <PrivateRoute>
          <FavoritesPage />
        </PrivateRoute>
      }
      />
      <Route path={APP_PAGES.OFFER} element={<OfferPage />}/>
      <Route path={APP_PAGES.PAGE_404} element={<Page404 />}/>
    </Routes>
  );
}

export {App};
