import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    login('Pablo Rodríguez');

    const lastPath = localStorage.getItem('lastPath') || '/';

    navigate(lastPath, { replace: true });
  };

  return (
    <div className='container mt-4'>
      <h1>Login Page</h1>
      <hr />
      <button className='btn btn-primary' onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
