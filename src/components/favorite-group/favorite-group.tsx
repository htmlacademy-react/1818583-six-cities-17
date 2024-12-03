import {OfferType} from '../../types.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type Props = {
  offers: OfferType[];
  city: string;
}

function FavoriteGroup({offers, city}: Props) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {
          offers.map((offer) => <OfferCard key={offer.id} offer={offer} cardType='favorites'/>)
        }
      </div>
    </li>
  );
}

export default FavoriteGroup;
