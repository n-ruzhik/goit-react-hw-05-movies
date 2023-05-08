import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { useEffect, useState, useRef, Suspense } from 'react';

import { fetchMovieInfo } from '../../components/utils/apiMovies';
import { BallTriangle } from 'react-loader-spinner';
import css from './MoviesItem.module.css';

export default function MoviesItem() {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const pathReturn = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      const getInfo = async () => {
        const { data } = await fetchMovieInfo(movieId);

        setMovieDetails(data);
      };

      getInfo();
    } catch (error) {
      console.log(error.message);
      setMovieDetails({});
    }
  }, [movieId]);

  return (
    <div className={css.movieItemContainer}>
      <Link className={css.backLink} to={pathReturn.current}>
        Return
      </Link>
      {movieDetails && (
        <div>
          <div className={css.movieItemCard}>
            <div>
              <img
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                    : `https://brinkys.gr/media/products//Image-Not-Available.png`
                }
                alt={movieDetails.title}
                width="400"
                height="100%"
              />
            </div>
            <div className={css.infoBox}>
              <div>
                <h1>{movieDetails.title}</h1>
                <p>Average score: {movieDetails.vote_average}</p>
                <div className={css.overviewBox}>
                  <h2>Overview</h2>
                  <p>{movieDetails.overview}</p>
                </div>
                <div className={css.genresBox}>
                  <h3>Genres</h3>
                  <ul className={css.genresList}>
                    {movieDetails.genres.map(({ name }) => name).join(', ')}
                  </ul>
                </div>
              </div>
              <div className={css.additionalInfoBox}>
                <h3>Additional Information</h3>
                <ul className={css.additionalInfoList}>
                  <li className={css.additionalItem}>
                    <Link className={css.additionalItemLink} to="cast">
                      Cast
                    </Link>
                  </li>
                  <li className={css.additionalItem}>
                    <Link className={css.additionalItemLink} to="reviews">
                      Reviews
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Suspense
            fallback={
              <div className={css.loader}>
                <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#ff7e31"
                  ariaLabel="ball-triangle-loading"
                  // wrapperClass={css.loader}
                  wrapperStyle=""
                  visible={true}
                />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
