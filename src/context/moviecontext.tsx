/* eslint-disable no-undef */
import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { IPropsMovies, MovieInfo } from '../models/movies';
import { api } from '../services/api';

const MoviesContext = createContext<IPropsMovies>({} as IPropsMovies);

const Context: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<Array<MovieInfo.Result>>([]);
  const [searchMovie, setSearchMovie] = useState<string>('');
  const [favorites, setFavorites] = useState<Array<MovieInfo.Result>>([]);
  const [content, setContent] = useState<MovieInfo.Result>();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    // console.log(data);
    setMovies(data.results);
  };

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchMovie}&page=1&include_adult=false`
    );
    setMovies(data.results);
  };

  const fetchSelectedMovie = async (movie_id: number) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US      `
    );
    setContent(data);
  };

  const addFavorite = async (id: number) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setFavorites(data);
    setFavorites([...favorites, data] as any);
    console.log(favorites);
  };

  const setVoteColor = (vote: number) => {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
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
        fetchSearch,
        fetchSelectedMovie,
        searchMovie,
        setSearchMovie,
        setVoteColor,
        addFavorite,
        setFavorites,
        favorites,
        content,
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
