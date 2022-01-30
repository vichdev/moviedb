import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useMovieContext } from '../../context/moviecontext';
import * as Styles from './styles';
import { IPropsSelectedMovie } from './types';

const SelectedContent: React.FC<IPropsSelectedMovie> = ({
  id,
  key,
  overview,
  vote_average,
  vote_count,
  poster,
  release_date,
  title,
}) => {
  const { setVoteColor, movies, setMovies } = useMovieContext();

  return (
    <Styles.SelectedMovieContainer>
      <Styles.SelectedMovie>
        <Styles.SelMovieImg src={`https://image.tmdb.org/t/p/w300${poster}`} />
        <Styles.InformationWrapper>
          <Styles.SelTitle>{title}</Styles.SelTitle>
          <Styles.SelOverview>{overview}</Styles.SelOverview>
          <Styles.DescriptionWrapper>
            <Styles.SelPopularity>Votos: {vote_count}</Styles.SelPopularity>
            <Styles.RatingWrapper>
              <Styles.SelRating color={setVoteColor(vote_average!)}>
                <FaStar />
                {vote_average}
              </Styles.SelRating>
            </Styles.RatingWrapper>
            <Styles.SelDate>Lançamento: {release_date}</Styles.SelDate>
          </Styles.DescriptionWrapper>
        </Styles.InformationWrapper>
      </Styles.SelectedMovie>
    </Styles.SelectedMovieContainer>
  );
};

export default SelectedContent;
