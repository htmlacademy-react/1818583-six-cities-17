import MainPage from '../../pages/main-page/main-page.tsx';
import {OfferType} from '../../types.ts';
import {Route, Routes} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page.tsx';
import Page404 from '../../pages/page-404/page-404.tsx';
import FavoritesPage from '../../pages/favorites-page/favorites-page.tsx';
import OfferPage from '../../pages/offer-page/offer-page.tsx';
import {APP_PAGES} from '../../const.ts';
import PrivateRoute from '../private-route/private-route.tsx';

type Props = {
  offers: OfferType[];
}

const HAS_ACCESS = true;

function App({ offers }: Props) {
  return (
    <Routes>
      <Route path={APP_PAGES.MAIN} element={<MainPage offers={offers}/>}/>
      <Route path={APP_PAGES.LOGIN} element={<LoginPage />}/>
      <Route path={APP_PAGES.FAVORITES} element={
        <PrivateRoute hasAccess={HAS_ACCESS}>
          <FavoritesPage offers={offers}/>
        </PrivateRoute>
      }
      />
      <Route path={APP_PAGES.OFFER} element={<OfferPage />}/>
      <Route path={APP_PAGES.PAGE_404} element={<Page404 />}/>
    </Routes>
  );
}

export default App;
