import axios, {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {API_TIMEOUT, API_URL, ApiRoutes, AuthStatus} from './const.ts';
import {getToken} from './token.ts';
import {StatusCodes} from 'http-status-codes';
import {store} from '../store';
import {setAuthStatus, setError} from '../store/action.ts';
import {clearErrorAction} from './actions.ts';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => Boolean(StatusCodeMapping[response.status]);

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_URL,
    timeout: API_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{message: string}>) => {
      if (error.response && shouldDisplayError(error.response)) {
        store.dispatch(setError(error.response.data.message));
        store.dispatch(clearErrorAction());

        if (error.config?.url === ApiRoutes.LOGIN) {
          store.dispatch(setAuthStatus(AuthStatus.NO_AUTH));
        }
      }
    }
  );

  return api;
};
