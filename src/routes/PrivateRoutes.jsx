import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../auth/context';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoutes = ({
  children,
  onUnauthorize = <Navigate to='/login' />,
}) => {
  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  useEffect(() => {
    const lastPath = pathname + search;

    localStorage.setItem('lastPath', lastPath);
  }, [pathname, search]);

  return logged ? children : onUnauthorize;
};

PrivateRoutes.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onUnauthorize: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PrivateRoutes;
