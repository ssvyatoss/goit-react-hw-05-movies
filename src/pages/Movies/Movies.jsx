import React, { useState } from 'react';
import { useHttp } from 'components/hooks/useHttp';
import { fetchSearchMovies } from 'services/api';
import { Link } from 'react-router-dom';

export const Movies = () => {
    const [keyword, setKeyword] = useState('');
    const [movies, setMovies] = useHttp(fetchSearchMovies, keyword);
  
    const handleSearch = () => {
      setMovies(keyword);
    };
  
    return (
      <div>
        <h2>Search Movies</h2>
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
  
        {movies && movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>No movies found.</div>
        )}
      </div>
    );
  };