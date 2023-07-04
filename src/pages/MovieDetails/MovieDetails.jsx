import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from 'components/hooks/useHttp';
import { fetchMovieDetails } from 'services/api';


export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useHttp(fetchMovieDetails, [movieId]);

  useEffect(() => {
    setMovie(movieId);
  }, [movieId, setMovie]);

  return (
    <div>
      <h2>Movie Details</h2>
      {movie && (
        <div>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
        </div>
      )}
    </div>
  );
};