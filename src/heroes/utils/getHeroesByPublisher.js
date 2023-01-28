import { heroes } from '../data';

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ['Marvel Comics', 'DC Comics'];

  if (!validPublishers.includes(publisher))
    throw new Error(`${publisher} is not valid publisher`);

  return heroes.filter((hero) => hero.publisher === publisher);
};
