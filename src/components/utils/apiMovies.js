import axios from 'axios';
const KEY = '8664a2b6db354b584ef037e248f4b600';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  try {
    return await axios.get(`${BASE_URL}trending/movie/week?api_key=${KEY}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesByQuery = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieInfo = async movieId => {
  try {
    return await axios.get(
      `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    return await axios.get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    return await axios.get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`
    );
  } catch (error) {
    console.log(error);
  }
};
