import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import css from './MovieGalleryItem.module.css';

export default function MovieGalleryItem({ poster_path, title, location, id }) {
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
            alt={title}
            max-width="270"
            max-height="405"
          />
        </div>
        <h2 className={css.titleMovie}>{title}</h2>
      </Link>
    </li>
  );
}

MovieGalleryItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.objectOf(PropTypes.string),
};
