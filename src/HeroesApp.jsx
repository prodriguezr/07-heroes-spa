import { AuthProvider } from './auth/context';
import { AppRoutes } from './routes';

export const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
};

export default HeroesApp;
