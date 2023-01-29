import { render, screen } from '@testing-library/react';
import { PrivateRoutes } from '../../routes';
import { AuthContext } from '../../auth/context';
import { MemoryRouter } from 'react-router-dom';

describe('Tests on <PrivateRoutes />', () => {
  it('Should show children elements if is authenticated', () => {
    Storage.prototype.setItem = vi.fn();

    const context = {
      logged: true,
      user: {
        id: '7687',
        name: 'Romina',
      },
    };

    render(
      <AuthContext.Provider value={context}>
        <MemoryRouter initialEntries={['/search?q=flash']}>
          <PrivateRoutes>
            <h1>Private Route</h1>
          </PrivateRoutes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Private Route')).toBeTruthy();

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      '/search?q=flash'
    );
  });
});
