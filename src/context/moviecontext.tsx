import React, { createContext, useContext } from "react";
import { IPropsMovies } from "../models/movies";

const MoviesContext = createContext<IPropsMovies>({} as IPropsMovies);

const Context: React.FC = ({ children }) => {
  return <MoviesContext.Provider value={{}}>{children}</MoviesContext.Provider>;
};

function useMovieContext() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error("O hook deve ser usado como provider!");
  }
  return context;
}

export { Context, useMovieContext };
