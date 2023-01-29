import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/context';
import { Navbar } from '../../../ui/components';

const mockUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockUseNavigate,
  };
});

describe('Tests on <Navbar/>', () => {
  const defaultUsername = 'Marisel';

  const context = {
    logged: true,
    user: {
      id: new Date().getTime(),
      name: defaultUsername,
    },
    logout: vi.fn(),
  };

  beforeEach(() => vi.clearAllMocks());

  test('Should show logged user name', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={context}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(defaultUsername)).toBeDefined();
  });

  test('Must log out and navigate when the button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={context}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    const logoutButton = screen.getByRole('button');

    fireEvent.click(logoutButton);

    expect(context.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
