import { HeroCard } from '../components';
import { useForm } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../utils';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = q.trim().length === 0;
  const showError = q.trim().length > 0 && heroes.length === 0;

  const { formValues, onInputChange } = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const onSearch = (event) => {
    event.preventDefault();

    if (searchText.trim().length === 0) return;

    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Searching ...</h4>
          <hr />
          <form onSubmit={onSearch}>
            <input
              type='text'
              placeholder='Search a hero'
              className='form-control mt-4'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button
              className='btn btn-outline-primary mt-4'
              type='submit'
              disabled={searchText.trim().length === 0}
            >
              Search
            </button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <div
            className='alert alert-primary animate__animated animate__fadeIn'
            style={{ display: showSearch ? '' : 'none' }}
          >
            Search a hero
          </div>

          <div
            className='alert alert-danger animate__animated animate__fadeIn'
            style={{ display: showError ? '' : 'none' }}
          >
            Hero not found with <b>{searchText}</b>
          </div>
          {heroes.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;
