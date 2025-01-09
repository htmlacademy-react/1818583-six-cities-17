import {RootState} from './index.ts';

export const selectCity = (state: RootState) => state.app.city;

export const selectOffers = (state: RootState) => state.app.offers;

export const selectOffer = (state: RootState) => state.app.offer;

export const selectSortOffersBy = (state: RootState) => state.app.sortOffersBy;

// todo непонятно, как обрабатывать такие ошибки
export const selectError = (state: RootState) => state.app.error;

export const selectUserData = (state: RootState) => state.app.userData;

export const selectAuthStatus = (state: RootState) => state.app.authStatus;

export const selectLoading = (state: RootState) => state.app.loading;
