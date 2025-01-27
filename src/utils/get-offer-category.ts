import {offerCategories} from '../const.ts';

export function getOfferCategory(type: string): string {
  return offerCategories[type];
}
