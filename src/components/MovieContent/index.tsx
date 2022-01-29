import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import * as Styles from './styles';
import { IPropsMovieContent } from './types';

const MovieContent: React.FC<IPropsMovieContent> = ({
  id,
  title,
  poster,
  key,
  vote_average,
  overview,
}) => {
  const [favorite, setFavorite] = useState<boolean>(false);

  const setVoteClass = (vote: number) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  return (
    <Styles.Movie>
      <Styles.MovieImg src={`https://image.tmdb.org/t/p/w300${poster}`} />
      <FaHeart />
      <Styles.MovieDescriptionWrapper>
        <Styles.MovieTitle>{title}</Styles.MovieTitle>
        <Styles.MovieRating color={setVoteClass(vote_average)}>
          {vote_average}
        </Styles.MovieRating>
      </Styles.MovieDescriptionWrapper>
      <Styles.MovieOverview>{overview}</Styles.MovieOverview>
    </Styles.Movie>
  );
};

export default MovieContent;
