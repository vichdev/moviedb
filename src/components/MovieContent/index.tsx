import axios from 'axios';
import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { useMovieContext } from '../../context/moviecontext';
import * as Styles from './styles';
import { IPropsMovieContent } from './types';

const MovieContent: React.FC<IPropsMovieContent> = ({
  id,
  title,
  poster,
  key,
  vote_average,
}) => {
  const { setVoteColor, setMovies, fetchSelectedMovie } = useMovieContext();
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <Styles.MovieLink to="/SelectedMovie">
      <Styles.Movie>
        <Styles.MovieImg src={`https://image.tmdb.org/t/p/w300${poster}`} />
        <FaHeart />
        <Styles.MovieDescriptionWrapper>
          <Styles.MovieTitle>{title}</Styles.MovieTitle>
          <Styles.MovieRating color={setVoteColor(vote_average)}>
            {vote_average}
          </Styles.MovieRating>
        </Styles.MovieDescriptionWrapper>
      </Styles.Movie>
    </Styles.MovieLink>
  );
};

export default MovieContent;
