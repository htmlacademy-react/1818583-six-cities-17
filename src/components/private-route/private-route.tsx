import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';
import {AppPages} from '../../const.ts';
import {useAppSelector} from '../../hooks/use-app-selector.ts';
import {AuthStatus} from '../../api/const.ts';
import {selectAuthStatus} from '../../store/user-slice/selectors.ts';

type Props = {
  children: ReactNode;
};

function PrivateRoute({children}: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  return authStatus !== AuthStatus.AUTH ? <Navigate to={AppPages.LOGIN} /> : children;
}

export {PrivateRoute};
