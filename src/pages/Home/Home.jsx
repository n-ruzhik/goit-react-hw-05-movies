import PropTypes from 'prop-types';
import css from './Home.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../components/utils/apiMovies';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    try {
      const getTrendingMovies = async () => {
        const {
          data: { results },
        } = await fetchTrendingMovies();

        const filteredData = results.map(({ id, poster_path, title }) => ({
          id,
          poster_path,
          title,
        }));

        setPopularMovies(filteredData);
      };
      getTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1 className={css.headerTitle}>Trending movies</h1>
      <ul className={css.trendingGallery}>
        {popularMovies.map(({ id, poster_path, title }) => {
          return (
            <li className={css.trendingItem} key={id}>
              <Link to={`/movies/${id}`} className={css.trendingItemLink}>
                <div className={css.imgThumb}>
                  <img
                    className={css.imgPoster}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : `https://brinkys.gr/media/products//Image-Not-Available.png`
                    }
                    alt={title}
                    width="100%"
                    height="100%"
                  />
                </div>
                <h2 className={css.titleMovie}>{title}</h2>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};
