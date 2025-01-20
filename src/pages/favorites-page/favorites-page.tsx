import {Header} from '../../components/header/header.tsx';
import {Footer} from '../../components/footer/footer.tsx';
import {FavoriteGroup} from '../../components/favorite-group/favorite-group.tsx';
import {getOfferGroups} from '../../adaptors.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {OfferType} from '../../api/types.ts';
import {Spinner} from '../../components/spinner/spinner.tsx';
import {selectFavoriteOffers, selectIsLoadingFavorites} from '../../store/favorites-slice/selectors.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useEffect} from 'react';
import {fetchFavoritesAction} from '../../api/actions.ts';

function FavoritesPage() {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const loading = useAppSelector(selectIsLoadingFavorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  const offerGroups = getOfferGroups(favoriteOffers);
  const offerKeys = Object.keys(offerGroups);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            offerKeys.length ? (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    offerKeys.map((groupKey) => {
                      const group: OfferType[] = offerGroups[groupKey];
                      return <FavoriteGroup key={groupKey} offers={group} city={groupKey}/>;
                    })
                  }
                </ul>
              </section>
            ) : (
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.
                  </p>
                </div>
              </section>
            )
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

export {FavoritesPage};
