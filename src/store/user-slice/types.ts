import {UserData} from '../../api/types.ts';
import {AuthStatus} from '../../api/const.ts';

export type UserSliceType = {
  authStatus: AuthStatus;
  userData: UserData | null;
  isLoadingUser: boolean;
}
