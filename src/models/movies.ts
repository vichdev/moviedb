/* eslint-disable no-empty-pattern */
export interface IPropsMovies {
  movies?: Array<MovieInfo.Result>;
  setMovies: ([]) => void;
  searchMovie?: string;
  setSearchMovie: (search: string) => void;
  fetchData: (movie: string) => void;
  fetchSearch: () => void;
  fetchSelectedMovie: (id: number) => void;
  setVoteColor: (vote: number) => string;
  addFavorite: (id: number) => void;
  favorites?: Array<MovieInfo.Result>;
  setFavorites: (favorties: any) => void;
  content?: MovieInfo.Result;
}

export declare module MovieInfo {
  export interface Result {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
  }
  export interface RootObject {
    page: number;
    results: Result[];
    total_results: number;
    total_pages: number;
  }
}
