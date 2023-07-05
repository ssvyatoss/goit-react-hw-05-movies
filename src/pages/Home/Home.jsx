import React, { useEffect } from 'react';
import { useHttp } from 'components/hooks/useHttp';
import { fetchTrendingMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useHttp(fetchTrendingMovies);

  useEffect(() => {
    setMovies([]);
  }, [setMovies]);

  return (
    <>
    <h1>Trending today</h1>
    <MoviesList movies={movies}/>
    </>
  );
};

export default Home;