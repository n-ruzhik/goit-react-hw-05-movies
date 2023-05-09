import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../components/utils/apiMovies';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const normalizedReviews = arr => {
    return arr.map(({ id, content }) => ({
      id,
      content,
    }));
  };

  useEffect(() => {
    const getReviews = async () => {
      try {
        const {
          data: { results },
        } = await fetchMovieReviews(movieId);

        setReviews(normalizedReviews(results));

        return reviews;
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [reviews, movieId]);

  return (
    <ul className={css.reviewList}>
      {reviews.length === 0 ? (
        <p className={css.message}>Sorry, there are no reviews yet</p>
      ) : (
        reviews.map(({ id, content }) => {
          return (
            <li className={css.reviewItem} key={id}>
              <p>{content}</p>
            </li>
          );
        })
      )}
    </ul>
  );
}
