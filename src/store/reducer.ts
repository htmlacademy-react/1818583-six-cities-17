import {createReducer} from '@reduxjs/toolkit';
import {AppStore} from './types.ts';
import {changeCity, setOffersList, setSortOffersBy} from './action.ts';
import {OFFERS_MOCK} from '../mocks/offers.ts';
import {SORT_BY} from '../const.ts';

const initialState: AppStore = {
  city: 'paris',
  offers: OFFERS_MOCK,
  sortOffersBy: SORT_BY.POPULAR,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffersList, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setSortOffersBy, (state, { payload }) => {
      state.sortOffersBy = payload;
    });
});

export {reducer};
