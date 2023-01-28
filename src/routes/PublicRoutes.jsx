import { useContext } from 'react';
import { AuthContext } from '../auth/context';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoutes = ({
  children,
  onDefault = <Navigate to='/marvel' />,
}) => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : onDefault;
};

PublicRoutes.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onDefault: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PublicRoutes;
