import {MainPage} from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {AppPages} from '../../const.ts';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {checkAuthAction, fetchOffersAction} from '../../api/actions.ts';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={AppPages.MAIN} element={<MainPage />}/>
      <Route path={AppPages.LOGIN} element={<LoginPage />}/>
      <Route path={AppPages.FAVORITES} element={
        <PrivateRoute>
          <FavoritesPage />
        </PrivateRoute>
      }
      />
      <Route path={AppPages.OFFER} element={<OfferPage />}/>
      <Route path={AppPages.ANY_PAGE} element={<NotFoundPage />}/>
    </Routes>
  );
}

export {App};
