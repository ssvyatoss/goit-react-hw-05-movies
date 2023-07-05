import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieDetails } from 'services/api';

const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  useEffect(() => {
    fetchMovieDetails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Link to={location?.state?.from || '/'}>Go back</Link>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>User Score: {movieDetails.vote_average}</p>
      <h3>Overview</h3>
      <p>{movieDetails.overview}</p>
      <h4>Genres</h4>
      <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default MoviePage;