import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
  movie,
}) => {
  const { setVoteColor, movies, fetchSelectedMovie, addFavorite } =
    useMovieContext();

  return (
    <Styles.Movie onClick={() => fetchSelectedMovie(id as number)}>
      <Styles.MovieLink to="/SelectedMovie">
        <Styles.MovieImg
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={`Capa do filme: ${title} `}
        />
      </Styles.MovieLink>
      <FaHeart onClick={() => addFavorite(id as number)} />
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
