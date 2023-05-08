import axios from 'axios';
const KEY = '8664a2b6db354b584ef037e248f4b600';
// const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesByQuery = async query => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieInfo = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
};
