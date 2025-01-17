import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserSliceType} from './types.ts';
import {
  checkAuthAction,
  loginAction, logoutAction
} from '../../api/actions.ts';
import {UserData} from '../../api/types.ts';
import {AuthStatus} from '../../api/const.ts';

const initialState: UserSliceType = {
  authStatus: AuthStatus.UNKNOWN,
  userData: null,
  isLoadingUser: true,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.AUTH;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.NO_AUTH;
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(loginAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.AUTH;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.NO_AUTH;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NO_AUTH;
        state.userData = null;
        state.isLoadingUser = false;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLoadingUser = false;
      });
  },
});

export { userSlice };
