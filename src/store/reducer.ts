import {createReducer} from '@reduxjs/toolkit';
import {AppStore} from './types.ts';
import {
  changeCity,
  setAuthStatus,
  setError,
  setLoading,
  setOffersList,
  setSortOffersBy,
  setUserData
} from './action.ts';
import {SORT_BY} from '../const.ts';
import {AuthStatus} from '../api/const.ts';

const initialState: AppStore = {
  city: 'paris',
  offers: [],
  sortOffersBy: SORT_BY.POPULAR,
  loading: true,
  authorizationStatus: AuthStatus.UNKNOWN,
  error: null,
  userData: null,
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
    })
    .addCase(setLoading, (state, { payload }) => {
      state.loading = payload;
    })
    .addCase(setAuthStatus, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(setUserData, (state, { payload }) => {
      state.userData = payload;
    });
});

export {reducer};
