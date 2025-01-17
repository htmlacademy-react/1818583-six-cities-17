import {CommentType, OfferDetailsType, OfferType} from '../../api/types.ts';

export type OfferSliceType = {
  offersNearby: OfferType[];
  offerComments: CommentType[];
  offer: OfferDetailsType | null;
  isLoadingOffer: boolean;
  isLoadingOffersNearby: boolean;
  isLoadingOfferComments: boolean;
}
