import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../components/utils/apiMovies';
import css from './Movies.module.css';
import Notiflix from 'notiflix';

export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [findedMovies, setFindedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryFromParams = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (searchQueryFromParams === null) {
      return;
    }

    try {
      const getFindedMovies = async () => {
        const {
          data: { results },
        } = await fetchMoviesByQuery(searchQueryFromParams);

        if (!results.length) {
          Notiflix.Notify.warning('Nothing found for your request, try again');
        }

        const findedData = results.map(
          ({ id, poster_path, original_title }) => ({
            id,
            poster_path,
            original_title,
          })
        );

        setFindedMovies(findedData);
      };

      getFindedMovies();
    } catch (error) {
      console.log(error.message);
    }
  }, [searchQueryFromParams, searchParams]);

  const onChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let { value } = event.target.elements.search;

    setSearchQuery(value.toLowerCase().trim());
    setSearchParams({ query: value.toLowerCase().trim() });

    if (searchQuery.trim() === '') {
      Notiflix.Notify.warning('Write movie title for searching');
      value = '';
      return;
    }

    setSearchQuery('');
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className={css.searchForm}>
          <input
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="search movie"
            value={searchQuery}
            onChange={onChange}
            className={css.searchInput}
          />
          <button type="submit" className={css.button}>
            Search
          </button>
        </form>
      </div>

      {findedMovies && (
        <ul className={css.trendingGallery}>
          {findedMovies.map(({ id, poster_path, original_title }) => {
            return (
              <li className={css.findedItem} key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  key={id}
                  className={css.findedItemLink}
                >
                  <div className={css.imgThumb}>
                    <img
                      className={css.imgPoster}
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : `https://brinkys.gr/media/products//Image-Not-Available.png`
                      }
                      alt={original_title}
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <h2 className={css.titleMovie}>{original_title}</h2>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
