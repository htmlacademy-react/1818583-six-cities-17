import {useAppSelector} from './use-app-selector.ts';
import {filterOffersByCity} from '../utils/adaptors.ts';
import {defaultCity} from '../const.ts';
import {LocationType, OfferType} from '../api/types.ts';
import {Point} from '../types.ts';
import {selectCity, selectSortOffersBy} from '../store/app-slice/selectors.ts';
import {selectIsLoadingOffers, selectOffers} from '../store/offers-slice/selectors.ts';
import {selectFavoriteOffers} from '../store/favorites-slice/selectors.ts';
import {isOfferFavorite} from '../utils/is-offer-favorite.ts';
import {getCityName} from '../utils/get-city-name.ts';
import {getSortedOffers} from '../utils/get-sorted-offers.ts';

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
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const sortBy = useAppSelector(selectSortOffersBy);

  const filteredOffers = filterOffersByCity(offers, cityId);

  const offersWithFavorites: OfferType[] = filteredOffers.map((offer) => ({
    ...offer,
    isFavorite: isOfferFavorite(favoriteOffers, offer.id),
  }));

  const points: Point[] = offersWithFavorites.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

  const cityName = getCityName(cityId);

  const city: LocationType = offersWithFavorites.find((offer) => offer.city.name === cityName)?.city.location || defaultCity;

  const sortedOffers = getSortedOffers(offersWithFavorites, sortBy);

  return {
    offers: sortedOffers,
    points,
    city,
    isLoadingOffers,
  };
}

export {useOffers};
