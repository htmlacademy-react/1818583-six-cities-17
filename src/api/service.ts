import axios, {AxiosInstance} from 'axios';
import {API_TIMEOUT, API_URL} from './const.ts';

export const createApi = (): AxiosInstance => axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
});
