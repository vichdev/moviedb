import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IPropsMovies, MovieInfo } from '../models/movies';
import { api } from '../services/api';

const API_KEY = '1ccb38448aa4ed9a78ef2d4fecba9df9';

const MoviesContext = createContext<IPropsMovies>({} as IPropsMovies);

const Context: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Array<MovieInfo.Result>>([]);
  const [search, setSearch] = useState<string>('');

  const fetchData = async () => {
    const { data } = await axios.get(
      // eslint-disable-next-line no-undef
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    console.log(data);
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        fetchData,
        search,
        setSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

function useMovieContext() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error('O hook deve ser usado como provider!');
  }
  return context;
}

export { Context, useMovieContext };
