import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=1ccb38448aa4ed9a78ef2d4fecba9df9&language=en-US&page=1",
});
