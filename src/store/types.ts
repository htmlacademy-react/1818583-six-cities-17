import {OfferType} from '../types.ts';
import {SORT_BY} from '../const.ts';

export type AppStore = {
  city: string;
  offers: OfferType[];
  sortOffersBy: SORT_BY;
  loading: boolean;
}
