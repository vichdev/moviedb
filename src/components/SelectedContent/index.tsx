import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useMovieContext } from '../../context/moviecontext';
import * as Styles from './styles';

const SelectedContent: React.FC = () => {
  const { setVoteColor, content } = useMovieContext();

  return (
    <Styles.SelectedMovieContainer>
      <Styles.SelectedMovie>
        <Styles.SelMovieImg
          src={`https://image.tmdb.org/t/p/w300${content?.poster_path}`}
          alt={`Capa do filme: ${content?.title} `}
        />
        <Styles.InformationWrapper>
          <Styles.SelTitle>{content?.title}</Styles.SelTitle>
          <Styles.SelOverview>{content?.overview}</Styles.SelOverview>
          <Styles.DescriptionWrapper>
            <Styles.SelPopularity>
              Votos: {content?.vote_count}
            </Styles.SelPopularity>
            <Styles.RatingWrapper>
              <Styles.SelRating color={setVoteColor(content?.vote_average!)}>
                <FaStar />
                {content?.vote_average}
              </Styles.SelRating>
            </Styles.RatingWrapper>
            <Styles.SelDate>Lançamento: {content?.release_date}</Styles.SelDate>
          </Styles.DescriptionWrapper>
        </Styles.InformationWrapper>
      </Styles.SelectedMovie>
    </Styles.SelectedMovieContainer>
  );
};

export default SelectedContent;
