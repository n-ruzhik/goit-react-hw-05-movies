import PropTypes from 'prop-types';
import MovieGalleryItem from 'components/MovieGalleryItem';
import css from './MovieGallery.module.css';

export default function MovieGallery({ movies, location }) {
  return (
    <ul className={css.trendingGallery}>
      {movies.map(movie => {
        return (
          <MovieGalleryItem
            {...movie}
            key={movie.id}
            link={movie.id}
            location={location}
          />
        );
      })}
    </ul>
  );
}

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
    .isRequired,
  location: PropTypes.objectOf(PropTypes.string),
};
