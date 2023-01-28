import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroById } from '../utils';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

export const Hero = ({ toError }) => {
  const navigate = useNavigate();

  const onNavigateBack = () => {
    return navigate(-1);
  };

  const { id } = useParams();

  const hero = useMemo(() => getHeroById(id), [id]);

  if (!hero) return <Navigate to={toError} />;

  const { superhero, first_appearance, alter_ego, publisher, characters } =
    hero;

  return (
    <div className='row mt-5 animate__animated animate__fadeInLeft'>
      <div className='col-4'>
        <img
          src={`/heroes/${id}.jpg`}
          alt={superhero}
          className='img-thumbnail'
        />
      </div>
      <div className='col-8'>
        <h3>{superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b>Alter Ego: </b>
            {alter_ego}
          </li>
          <li className='list-group-item'>
            <b>Publisher: </b>
            {publisher}
          </li>
          <li className='list-group-item'>
            <b>First Appearance: </b>
            {first_appearance}
          </li>
        </ul>
        <h5 className='mt-3'>Characters:</h5>
        <p>{characters}</p>
        <button className='btn btn-outline-primary' onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};

Hero.propTypes = {
  toError: PropTypes.string.isRequired,
};

export default Hero;
