import { Routes, Route, Navigate } from 'react-router-dom';
import { DC, Hero, Marvel, Search } from '../../heroes/pages';
import { Navbar } from '../../ui/components';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-4'>
        <Routes>
          <Route path='marvel' element={<Marvel />} />
          <Route path='dc' element={<DC />} />
          <Route path='search' element={<Search />} />
          <Route path='hero/:id' element={<Hero toError='/marvel' />} />

          <Route path='/' element={<Navigate to='/marvel' />} />
        </Routes>
      </div>
    </>
  );
};

export default HeroesRoutes;
