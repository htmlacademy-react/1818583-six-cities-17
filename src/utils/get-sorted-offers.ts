import {OfferType} from '../api/types.ts';
import {SortBy, sortByOptions} from '../const.ts';

export function getSortedOffers(offers: OfferType[], sortBy: SortBy): OfferType[] {
  const sortingAction = sortByOptions.find((option) => option.sortBy === sortBy)?.sortingAction;

  if (!sortingAction) {
    return [];
  }

  return sortingAction(offers);
}
