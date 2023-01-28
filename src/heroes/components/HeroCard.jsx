import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) =>
  alter_ego === characters ? (
    <></>
  ) : (
    <p className='text-truncate'>{characters}</p>
  );

CharactersByHero.propTypes = {
  alter_ego: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};

export const HeroCard = ({
  hero: { id, superhero, alter_ego, characters, first_appearance },
}) => {
  const heroImagUrl = `/heroes/${id}.jpg`;

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImagUrl} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <Link to={`/hero/${id}`} className='mt-1'>
                <h5 className='card-title'>{superhero}</h5>
              </Link>

              <p className='card-text'>{alter_ego}</p>

              <CharactersByHero alter_ego={alter_ego} characters={characters} />

              <p className='card-text'>
                <small className='text-muted'>{first_appearance}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroCard.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.string,
    superhero: PropTypes.string,
    publisher: PropTypes.string,
    alter_ego: PropTypes.string,
    first_appearance: PropTypes.string,
    characters: PropTypes.string,
  }).isRequired,
};

export default HeroCard;
