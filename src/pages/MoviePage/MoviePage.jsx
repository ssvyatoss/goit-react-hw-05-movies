import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovieCredits, fetchMovieDetails, fetchMovieReviews } from 'services/api';


export const MoviePage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // fetchMovieDetails(movieId).then((data) => setMovieDetails(data));
    // fetchMovieCredits(movieId).then((data) => setCast(data));
    // fetchMovieReviews(movieId).then((data) => setReviews(data));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <img src={movieDetails.poster} alt={movieDetails.title} />
    </div>
  );
};