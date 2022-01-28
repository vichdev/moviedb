import axios from "axios";

export const api = axios.create({
  baseURL: "https://developers.themoviedb.org/3/movies/get-popular-movies",
});
