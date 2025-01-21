import {Header} from '../../components/header/header.tsx';
import {Footer} from '../../shared/footer/footer.tsx';
import {FavoriteGroup} from '../../components/favorite-group/favorite-group.tsx';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {OfferType} from '../../api/types.ts';
import {Spinner} from '../../shared/spinner/spinner.tsx';
import {selectFavoriteOffers, selectIsLoadingFavorites} from '../../store/favorites-slice/selectors.ts';
import {useAppDispatch} from '../../hooks/use-app-dispatch.ts';
import {useEffect} from 'react';
import {fetchFavoritesAction} from '../../api/actions.ts';
import {FavoritesEmpty} from '../../shared/favorites-empty/favorites-empty.tsx';
import {groupOffers} from '../../utils/adaptors.ts';

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

  const offerGroups = groupOffers(favoriteOffers);
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
              <FavoritesEmpty />
            )
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

export {FavoritesPage};
