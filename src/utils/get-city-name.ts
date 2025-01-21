import {cityLinks} from '../const.ts';

export function getCityName(cityId?: string) {
  return cityLinks.find((link) => link.id === cityId)?.displayName || '';
}
