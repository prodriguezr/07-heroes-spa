import { render, screen } from '@testing-library/react';
import { PublicRoutes } from '../../routes';
import { AuthContext } from '../../auth/context';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

describe('Tests on <PublicRoutes/>', () => {
  test('Should show children elements if is not authenticated', () => {
    const context = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={context}>
        <PublicRoutes>
          <h1>Public Route</h1>
        </PublicRoutes>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Public Route')).toBeTruthy();
  });

  test('Must navigate if the user is authenticated', () => {
    const context = {
      logged: true,
      user: {
        id: '3432',
        name: 'Marisel',
      },
    };

    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path='login'
              element={
                <PublicRoutes>
                  <h1>Public Route</h1>
                </PublicRoutes>
              }
            />
            <Route path='marvel' element={<h1>Marvel Page</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    screen.debug();

    expect(screen.getByText('Marvel Page')).toBeTruthy();
  });
});
