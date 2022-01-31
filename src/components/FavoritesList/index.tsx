import React from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useMovieContext } from '../../context/moviecontext';
import MovieContent from '../MovieContent';
import * as Styles from './styles';

const FavoritesList: React.FC = () => {
  const { favorites, isFavorite } = useMovieContext();

  const Checked = (item: number) => {
    if (favorites?.filter((x) => x.id === item)) {
      return true;
    }
  };

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
              checked={Checked(item.id)}
            />
          );
        })}
      </Styles.FavoritesList>
    </Styles.FavoritesContainer>
  );
};

export default FavoritesList;
