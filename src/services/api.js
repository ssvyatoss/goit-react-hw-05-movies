import axios from 'axios';

const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const res = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });

  const trendingMovies = res.data.results;
  return trendingMovies;
};

export const fetchSearchMovies = async (keyword) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      include_adult: false,
      language: 'en-US',
      page: 1,
      query: keyword,
    },
  });

  const searchMovies = res.data.results;
  return searchMovies;
};

export const fetchMovieDetails = async () => {
    const res = await axios.get(`${BASE_URL}/movie/movie_id?language=en-US`,
    {
        params: {
            api_key: API_KEY,
        }
    });

    const movieDetails = res.data.results;
    return movieDetails;
};

export const fetchMovieCredits = async () => {
    const res = await axios.get(`${BASE_URL}/movie/movie_id/credits?language=en-US`,
    {
        params: {
            api_key: API_KEY,
        }
    });

    const movieCredits = res.data.results;
    return movieCredits;
};

export const fetchMovieReviews = async () => {
    const res = await axios.get(`${BASE_URL}/movie/movie_id/reviews?language=en-US&page=1`,
    {
        params: {
            api_key: API_KEY,
        }
    });
   
    const movieReviews = res.data.results;
    return movieReviews;
};

