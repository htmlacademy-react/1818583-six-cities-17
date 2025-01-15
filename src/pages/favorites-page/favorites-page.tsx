import {Header} from '../../components/header/header.tsx';
import {Footer} from '../../components/footer/footer.tsx';
import {FavoriteGroup} from '../../components/favorite-group/favorite-group.tsx';
import {getOfferGroups} from '../../adaptors.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {OfferType} from '../../api/types.ts';
import {selectLoading, selectOffers} from '../../store/selectors.ts';
import {Spinner} from '../../components/spinner/spinner.tsx';

function FavoritesPage() {
  const offers = useAppSelector(selectOffers);
  const loading = useAppSelector(selectLoading);

  const offerGroups = getOfferGroups(offers);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.keys(offerGroups).map((groupKey) => {
                  const group: OfferType[] = offerGroups[groupKey];
                  return <FavoriteGroup key={groupKey} offers={group} city={groupKey}/>;
                })
              }
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export {FavoritesPage};
