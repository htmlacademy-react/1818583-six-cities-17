import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types.ts';
import {SORT_BY} from '../const.ts';

export const changeCity = createAction<string>('app/changeCity');

export const setOffersList = createAction<OfferType[]>('app/setOffersList');

export const setSortOffersBy = createAction<SORT_BY>('app/setSortOffersBy');

export const setLoading = createAction<boolean>('app/loading');
