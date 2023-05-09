import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../components/utils/apiMovies';
import Notiflix from 'notiflix';
import Searchbar from 'components/Searchbar';
import MovieGallery from 'components/MovieGallery';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchMoviesByQuery(searchQuery)
      .then(results => {
        if (!results.length) {
          Notiflix.Notify.warning('Nothing found for your request, try again');
          return;
        }

        setMovies(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [searchQuery]);

  const handleFormSubmit = query => {
    setSearchParams({ query: query.trim() });
    setMovies([]);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && <MovieGallery movies={movies} link={''} location={location} />}
    </div>
  );
}
