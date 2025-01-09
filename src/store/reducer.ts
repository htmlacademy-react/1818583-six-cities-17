import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppStore} from './types.ts';
import {SORT_BY} from '../const.ts';
import {AuthStatus} from '../api/const.ts';
import {checkAuthAction, fetchOfferAction, fetchOffersAction, loginAction, logoutAction} from '../api/actions.ts';
import {OfferDetailsType, OfferType, UserData} from '../api/types.ts';

const initialState: AppStore = {
  city: 'paris',
  offers: [],
  offer: null,
  sortOffersBy: SORT_BY.POPULAR,
  loading: true,
  authStatus: AuthStatus.UNKNOWN,
  error: false,
  userData: null,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    changeCity(state, { payload }: PayloadAction<string>) {
      state.city = payload;
    },
    setSortOffersBy(state, { payload }: PayloadAction<SORT_BY>) {
      state.sortOffersBy = payload;
    },
    setOffer(state, { payload }: PayloadAction<OfferDetailsType | null>) {
      state.offer = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.offers = payload;
        state.loading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, { payload }: PayloadAction<OfferDetailsType>) => {
        state.offer = payload;
        state.loading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(checkAuthAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.loading = false;
        state.authStatus = AuthStatus.AUTH;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.authStatus = AuthStatus.NO_AUTH;
      })
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.loading = false;
        state.authStatus = AuthStatus.AUTH;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.authStatus = AuthStatus.NO_AUTH;
      })
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NO_AUTH;
        state.userData = null;
        state.loading = false;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const { changeCity, setSortOffersBy, setOffer } = appSlice.actions;
export { appSlice };
