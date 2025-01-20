import {OfferType} from '../../api/types.ts';

export type FavoritesSliceType = {
  favoriteOffers: OfferType[];
  isLoadingFavorites: boolean;
}
