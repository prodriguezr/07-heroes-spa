import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { useReducer } from 'react';
import authReducer from './authReducer';

import types from '../types';

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem('authUser'));

  return {
    logged: !!user,
    user,
  };
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = async (name = '') => {
    const user = {
      id: new Date().getTime(),
      name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem('authUser', JSON.stringify(user));

    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('authUser');

    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthProvider;
