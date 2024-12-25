import {AppDispatch, RootState} from '../store';
import {AxiosInstance} from 'axios';

export type ThunkOptions = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}

export type Token = string;

export type AuthData = {
  login: string;
  password: string;
}

export type UserData = {
  id: number;
  email: string;
  token: Token;
}
