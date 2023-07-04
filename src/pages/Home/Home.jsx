import React, { useEffect } from 'react';
import { useHttp } from 'components/hooks/useHttp';
import { fetchTrendingMovies } from 'services/api';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useHttp(fetchTrendingMovies);

  useEffect(() => {
    setMovies([]);
  }, [setMovies]);

  return (
    <ul>
      <h1>Trending today</h1>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
