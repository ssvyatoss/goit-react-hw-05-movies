import React from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from 'components/hooks/useHttp';
import { fetchMovieReviews } from 'services/api';


const Reviews = () => {
  const { movieId } = useParams();
  const [reviews] = useHttp(fetchMovieReviews, movieId);

  console.log('Reviews', reviews)
  if (!reviews) {
    return <p>We don`t have any reviews</p>;
  }
  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;