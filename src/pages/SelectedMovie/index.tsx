import axios from 'axios';
import React, { useEffect } from 'react';
import Header from '../../components/Header';
import SelectedContent from '../../components/SelectedContent';
import { IPropsSelectedMovie } from '../../components/SelectedContent/types';
import { useMovieContext } from '../../context/moviecontext';

const SelectedMovie: React.FC<IPropsSelectedMovie> = ({ id }) => {
  const { movies } = useMovieContext();

  return (
    <>
      <Header />
      {movies && <SelectedContent id={id} />}
    </>
  );
};

export default SelectedMovie;
