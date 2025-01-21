import {MainPage} from '../../pages/main-page/main-page.tsx';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/login-page/login-page.tsx';
import {NotFoundPage} from '../../pages/not-found-page/not-found-page.tsx';
import {FavoritesPage} from '../../pages/favorites-page/favorites-page.tsx';
import {OfferPage} from '../../pages/offer-page/offer-page.tsx';
import {AppPages} from '../../const.ts';
import {PrivateRoute} from '../private-route/private-route.tsx';
import {checkAuthAction, fetchFavoritesAction, fetchOffersAction} from '../../api/actions.ts';
import {useEffect} from 'react';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {selectAuthStatus} from '../../store/user-slice/selectors.ts';
import {AuthStatus} from '../../api/const.ts';

function App() {
  const authStatus = useAppSelector(selectAuthStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }
  }, [authStatus, dispatch]);

  return (
    <Routes>
      <Route path={AppPages.Main} element={<MainPage />}/>
      <Route path={AppPages.Login} element={<LoginPage />}/>
      <Route path={AppPages.Favorites} element={
        <PrivateRoute>
          <FavoritesPage />
        </PrivateRoute>
      }
      />
      <Route path={AppPages.Offer} element={<OfferPage />}/>
      <Route path={AppPages.AnyPage} element={<NotFoundPage />}/>
    </Routes>
  );
}

export {App};
