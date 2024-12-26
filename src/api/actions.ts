import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData, OfferType, ThunkOptions, UserData} from './types.ts';
import {ApiRoutes, AuthStatus} from './const.ts';
import {setAuthStatus, setError, setLoading, setOffersList, setUserData} from '../store/action.ts';
import {TIMEOUT_SHOW_ERROR} from '../const.ts';
import {dropToken, saveToken} from './token.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'offers/get',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoading(true));
    const { data } = await api.get<OfferType[]>(ApiRoutes.OFFERS);
    dispatch(setOffersList(data));
    dispatch(setLoading(false));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/check',
  async (_arg, {dispatch, extra: api}) => {
    const response = await api.get<UserData>(ApiRoutes.LOGIN);
    if (response) {
      dispatch(setUserData(response.data));
      dispatch(setAuthStatus(AuthStatus.AUTH));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkOptions>(
  'user/login',
  async ({ login, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(ApiRoutes.LOGIN, { email: login, password });
    saveToken(data.token);
    dispatch(setUserData(data));
    dispatch(setAuthStatus(AuthStatus.AUTH));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoutes.LOGOUT);
    dropToken();
    dispatch(setAuthStatus(AuthStatus.NO_AUTH));
    dispatch(setUserData(null));
  }
);

export const clearErrorAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'app/cleanError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, TIMEOUT_SHOW_ERROR);
  }
);
