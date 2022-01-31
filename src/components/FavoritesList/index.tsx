import React from 'react';
import { useMovieContext } from '../../context/moviecontext';
import * as Styles from './styles';

const FavoritesList: React.FC = () => {
  const { favorites } = useMovieContext();

  return <>{favorites}</>;
};

export default FavoritesList;
