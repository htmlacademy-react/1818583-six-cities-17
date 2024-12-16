import {createAction} from '@reduxjs/toolkit';
import {OfferType} from '../types.ts';

export const changeCity = createAction<string>('app/changeCity');

export const setOffersList = createAction<OfferType[]>('app/setOffersList');
