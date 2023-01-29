import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Search } from '../../../heroes/pages';

const mockUseNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');

  return {
    ...actual,
    useNavigate: () => mockUseNavigate,
  };
});

describe('Tests on <SearchPage/>', () => {
  test('Should show correctly with default values', () => {
    const { container } = render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    screen.debug();
    expect(container).toMatchSnapshot();
  });

  test('Should show Batman value and the input box with querystring value', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');

    expect(input.value).toBe('batman');

    const img = screen.getByRole('img');

    expect(img.src).toContain('batman');

    const label = screen.getByLabelText('searchHero');

    expect(label.style.display).toBe('none');
  });

  test('Should show an error when hero is not found', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=batman678']}>
        <Search />
      </MemoryRouter>
    );

    const heroNotFound = screen.getByLabelText('heroNotFound');

    expect(heroNotFound).toBeDefined();
  });

  test('Should call to navigate function and goto the next screen', () => {
    render(
      <MemoryRouter initialEntries={['/search']}>
        <Search />
      </MemoryRouter>
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { name: 'searchText', value: 'aquaman' },
    });

    const frm = screen.getByRole('form');

    fireEvent.submit(frm);

    expect(mockUseNavigate).toHaveBeenCalledWith('?q=aquaman');
  });
});
