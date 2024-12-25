import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';
import {APP_PAGES, AuthStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks/useAppSelector.ts';

type Props = {
  children: ReactNode;
};

function PrivateRoute({children}: Props) {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return authStatus === AuthStatus.AUTH ? children : <Navigate to={APP_PAGES.LOGIN} />;
}

export {PrivateRoute};
