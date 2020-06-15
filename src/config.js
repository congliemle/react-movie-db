const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3172b42e26017ef7919258cd930f29a5";
const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";
const BACKDROP_SIZE = "w1280";
const POSTER_SIZE = "w500";
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
};
