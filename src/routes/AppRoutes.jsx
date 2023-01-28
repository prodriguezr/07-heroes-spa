import { Routes, Route } from 'react-router-dom';
import { Login } from '../auth/pages';

import { HeroesRoutes } from '../heroes/routes';
import { PrivateRoutes, PublicRoutes } from '.';

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path='login'
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path='/*'
          element={
            <PrivateRoutes>
              <HeroesRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
