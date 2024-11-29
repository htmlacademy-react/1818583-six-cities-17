import {Navigate} from 'react-router-dom';
import {ReactNode} from 'react';
import {APP_PAGES} from '../../const.ts';

type Props = {
  children: ReactNode;
  hasAccess: boolean;
};

function PrivateRoute({children, hasAccess}: Props) {
  return hasAccess ? children : <Navigate to={APP_PAGES.LOGIN} />;
}

export default PrivateRoute;
