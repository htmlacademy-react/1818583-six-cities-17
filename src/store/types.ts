import {SORT_BY} from '../const.ts';
import {OfferDetailsType, OfferType, UserData} from '../api/types.ts';
import {AuthStatus} from '../api/const.ts';

export type AppStore = {
  city: string;
  offers: OfferType[];
  offer: OfferDetailsType | null;
  sortOffersBy: SORT_BY;
  loading: boolean;
  authStatus: AuthStatus;
  error: boolean;
  userData: UserData | null;
}
