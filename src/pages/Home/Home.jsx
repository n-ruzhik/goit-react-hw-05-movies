import PropTypes from 'prop-types';
import css from './Home.module.css';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../components/utils/apiMovies';
import MovieGallery from 'components/MovieGallery/MovieGallery';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

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

        setTrendingMovies(filteredData);
      };
      getTrendingMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h1 className={css.headerTitle}>Trending movies</h1>
      {trendingMovies && (
        <MovieGallery movies={trendingMovies} link={'movies/'} />
      )}
    </>
  );
}

Home.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape),
};
