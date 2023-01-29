import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../auth/context';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../../routes';

describe('Tests on <AppRoutes/>', () => {
  test('Should show the login page if not is authenticated', () => {
    const context = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={context}>
          <AppRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeDefined();
  });

  test('Should show the Marvel page if the user is logged', () => {
    const context = {
      logged: true,
      user: {
        id: new Date().getTime(),
        name: 'Romina',
      },
    };

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={context}>
          <AppRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Marvel Page')).toBeDefined();
  });
});
