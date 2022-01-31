import React from 'react';
import { FaHeart, FaTrash } from 'react-icons/fa';
import { useMovieContext } from '../../context/moviecontext';
import * as Styles from './styles';
import { IPropsMovieContent } from './types';

const MovieContent: React.FC<IPropsMovieContent> = ({
  id,
  title,
  poster,
  vote_average,
  checked,
}) => {
  const {
    setVoteColor,
    fetchSelectedMovie,
    addFavorite,
    unavailable,
    removeFavorites,
  } = useMovieContext();

  return (
    <Styles.Movie onClick={() => fetchSelectedMovie(id as number)}>
      <Styles.MovieLink to="/SelectedMovie">
        <Styles.MovieImg
          src={
            poster ? `https://image.tmdb.org/t/p/w300${poster}` : unavailable
          }
          alt={`Capa do filme: ${title} `}
        />
      </Styles.MovieLink>
      {checked && location.pathname === '/Favorites' ? (
        <Styles.RemoveFavorites>
          <FaTrash onClick={() => removeFavorites(id as number)} />
        </Styles.RemoveFavorites>
      ) : (
        <FaHeart onClick={() => addFavorite(id as number)} />
      )}
      <Styles.MovieDescriptionWrapper>
        <Styles.MovieTitle>{title}</Styles.MovieTitle>
        <Styles.MovieRating color={setVoteColor(vote_average)}>
          {vote_average}
        </Styles.MovieRating>
      </Styles.MovieDescriptionWrapper>
    </Styles.Movie>
  );
};

export default MovieContent;
