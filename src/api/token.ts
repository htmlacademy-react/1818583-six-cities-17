import {Token} from './types.ts';
import {ApiConfigType} from './const.ts';

export const getToken = (): Token => {
  const token = localStorage.getItem(ApiConfigType.TokenKeyName);
  return token ?? '';
};

export const saveToken = (token: Token) => {
  localStorage.setItem(ApiConfigType.TokenKeyName, token);
};

export const dropToken = () => {
  localStorage.removeItem(ApiConfigType.TokenKeyName);
};
