import React from 'react';
import { useMovieContext } from '../../context/moviecontext';
import MovieContent from '../MovieContent';
import * as Styles from './styles';

const FavoritesList: React.FC = () => {
  const { favorites } = useMovieContext();

  return (
    <Styles.FavoritesContainer>
      <Styles.FavoritesList>
        {favorites?.map((item, index) => {
          return (
            <MovieContent
              key={index}
              poster={item.poster_path}
              vote_average={item.vote_average}
              id={item.id}
              title={item.title}
            />
          );
        })}
      </Styles.FavoritesList>
    </Styles.FavoritesContainer>
  );
};

export default FavoritesList;
