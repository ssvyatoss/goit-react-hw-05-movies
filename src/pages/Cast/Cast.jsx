import React from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from 'components/hooks/useHttp';
import { fetchMovieCredits } from 'services/api';
import placeholderImage from '../../placeholderImage/966-9665317_placeholder-image-person-jpg.png';


const Cast = () => {
  const { movieId } = useParams();
  const [cast] = useHttp(fetchMovieCredits, movieId);
  console.log('cast', cast);
  return (
    <ul>
      {cast.map(member => (
        <li key={member.id}>
            <img
              src={member.profile_path ? `https://image.tmdb.org/t/p/w200${member.profile_path}` : placeholderImage} width='200px'
              alt={member.name}
            />
          <p>{member.name}</p>
          <p>{member.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;