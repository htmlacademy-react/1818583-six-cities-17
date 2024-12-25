import {createAsyncThunk} from '@reduxjs/toolkit';
import {AuthData, ThunkOptions, UserData} from './types.ts';
import {OfferType} from '../types.ts';
import {ApiRoutes} from './const.ts';
import {setAuthStatus, setError, setLoading, setOffersList} from '../store/action.ts';
import {AuthStatus, TIMEOUT_SHOW_ERROR} from '../const.ts';
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
    try {
      await api.get(ApiRoutes.LOGIN);
      dispatch(setAuthStatus(AuthStatus.AUTH));
      console.log('AuthStatus.AUTH');
    } catch {
      dispatch(setAuthStatus(AuthStatus.NO_AUTH));
      console.log(AuthStatus.NO_AUTH);
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, ThunkOptions>(
  'user/login',
  async ({ login, password}, {dispatch, extra: api}) => {
    const { data } = await api.post<UserData>(ApiRoutes.LOGIN, { email: login, password });
    saveToken(data.token);
    dispatch(setAuthStatus(AuthStatus.AUTH));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoutes.LOGOUT);
    dropToken();
    dispatch(setAuthStatus(AuthStatus.NO_AUTH));
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
