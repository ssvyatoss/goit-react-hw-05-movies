import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from 'components/hooks/useHttp';
import { fetchMovieCredits } from 'services/api';


export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useHttp(fetchMovieCredits, [movieId]);

  useEffect(() => {
    setCast(movieId);
  }, [movieId, setCast]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.map(member => (
        <div key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};