import {OfferType} from '../../api/types.ts';

export type OffersSliceType = {
  offers: OfferType[];
  isLoadingOffers: boolean;
}
