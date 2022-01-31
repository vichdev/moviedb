import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useMovieContext } from './context/moviecontext';
import Favorites from './pages/Favorites';
import Main from './pages/Main';
import SelectedMovie from './pages/SelectedMovie';

const RoutesPages: React.FC = () => {
  const { content } = useMovieContext();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Favorites" element={<Favorites />} />
      <Route path="/SelectedMovie" element={<SelectedMovie />} />
    </Routes>
  );
};

export default RoutesPages;
