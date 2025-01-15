import {SORT_BY} from '../const.ts';
import {CommentType, OfferDetailsType, OfferType, UserData} from '../api/types.ts';
import {AuthStatus} from '../api/const.ts';

export type AppStore = {
  city: string;
  offers: OfferType[];
  offersNearby: OfferType[];
  offerComments: CommentType[];
  offer: OfferDetailsType | null;
  sortOffersBy: SORT_BY;
  loading: boolean;
  authStatus: AuthStatus;
  userData: UserData | null;
}
