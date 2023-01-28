import { heroes } from '../data';

export const getHeroById = (heroId) => {
  return heroes.find((hero) => hero.id === heroId);
};
