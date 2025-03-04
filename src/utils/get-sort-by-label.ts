import {SortBy, sortByOptions} from '../const.ts';

export function getSortByLabel(sortBy: SortBy) {
  return sortByOptions.find((option) => option.sortBy === sortBy)?.label || '';
}
