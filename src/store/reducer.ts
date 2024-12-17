import {createReducer} from '@reduxjs/toolkit';
import {AppStore} from './types.ts';
import {changeCity, setOffersList} from './action.ts';
import {OFFERS_MOCK} from '../mocks/offers.ts';

const initialState: AppStore = {
  city: 'paris',
  offers: OFFERS_MOCK,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffersList, (state, { payload }) => {
      state.offers = payload;
    });
});

export {reducer};
