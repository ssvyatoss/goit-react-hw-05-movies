import React from 'react';
import { useHttp } from 'components/hooks/useHttp';
import { fetchSearchMovies } from 'services/api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm ';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("value");
  const [movies] = useHttp(fetchSearchMovies, keyword);

  const handleSearch = (value) => {
    setSearchParams({ value });
  };

  console.log('movies', movies);
  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
