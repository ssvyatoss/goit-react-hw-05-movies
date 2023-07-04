import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from 'components/hooks/useHttp';
import { fetchMovieReviews } from 'services/api';


export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useHttp(fetchMovieReviews, [movieId]);

  useEffect(() => {
    setReviews(movieId);
  }, [movieId, setReviews]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(review => (
        <div key={review.id}>
          <h3>{review.reviewerName}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};