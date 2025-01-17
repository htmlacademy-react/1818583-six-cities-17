import {RootState} from '../index.ts';

export const selectOffers = (state: RootState) => state.offers.offers;

export const selectIsLoadingOffers = (state: RootState) => state.offers.isLoadingOffers;
