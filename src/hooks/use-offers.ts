import {useAppSelector} from './useAppSelector.ts';
import {filterOffersByCity, getCityName, getSortedOffers} from '../adaptors.ts';
import {DEFAULT_CITY} from '../const.ts';
import {LocationType, OfferType} from '../api/types.ts';
import {Point} from '../types.ts';
import {selectCity, selectOffers, selectSortOffersBy} from '../store/selectors.ts';

type ReturnOffers = {
  offers: OfferType[];
  points: Point[];
  city: LocationType;
}

function useOffers(): ReturnOffers {
  const cityId = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);
  const sortBy = useAppSelector(selectSortOffersBy);

  const filteredOffers = filterOffersByCity(offers, cityId);

  const points: Point[] = filteredOffers.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

  const cityName = getCityName(cityId);

  const city: LocationType = filteredOffers.find((offer) => offer.city.name === cityName)?.city.location || DEFAULT_CITY;

  const sortedOffers = getSortedOffers(filteredOffers, sortBy);

  return {
    offers: sortedOffers,
    points,
    city,
  };
}

export {useOffers};
