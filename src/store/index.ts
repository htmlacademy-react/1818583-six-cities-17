import {configureStore} from '@reduxjs/toolkit';
import {createApi} from '../api/service.ts';
import {appSlice} from './app-slice/app-slice.ts';
import {offersSlice} from './offers-slice/offers-slice.ts';
import {offerSlice} from './offer-slice/offer-slice.ts';
import {userSlice} from './user-slice/user-slice.ts';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const api = createApi();

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    offers: offersSlice.reducer,
    offer: offerSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
