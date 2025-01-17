import {useAppSelector} from './use-app-selector.ts';
import {filterOffersByCity, getCityName, getSortedOffers} from '../adaptors.ts';
import {DEFAULT_CITY} from '../const.ts';
import {LocationType, OfferType} from '../api/types.ts';
import {Point} from '../types.ts';
import {selectCity, selectSortOffersBy} from '../store/app-slice/selectors.ts';
import {selectIsLoadingOffers, selectOffers} from '../store/offers-slice/selectors.ts';

type ReturnOffers = {
  offers: OfferType[];
  points: Point[];
  city: LocationType;
  isLoadingOffers: boolean;
}

function useOffers(): ReturnOffers {
  const cityId = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);
  const isLoadingOffers = useAppSelector(selectIsLoadingOffers);
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
    isLoadingOffers,
  };
}

export {useOffers};
