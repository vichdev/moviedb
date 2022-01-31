import React from 'react';
import * as Styles from './styles';
import { useMovieContext } from '../../context/moviecontext';
import MovieContent from '../MovieContent';

const MainContent: React.FC = () => {
  const { movies, favorites } = useMovieContext();

  console.log(favorites);

  return (
    <Styles.MovieContainer>
      <Styles.MainTitle>Mais populares</Styles.MainTitle>
      <Styles.PAnimated />
      <Styles.MoviesWrapper>
        {movies &&
          movies?.map((c) => (
            <MovieContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title}
              vote_average={c.vote_average}
            />
          ))}
      </Styles.MoviesWrapper>
    </Styles.MovieContainer>
  );
};

export default MainContent;
