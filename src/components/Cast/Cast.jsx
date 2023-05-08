import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../components/utils/apiMovies';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const normalizedCast = arr => {
    return arr.map(({ id, character, name, profile_path }) => ({
      id,
      character,
      name,
      profile_path,
    }));
  };

  useEffect(() => {
    const getCast = async () => {
      try {
        const {
          data: { cast },
        } = await fetchMovieCast(movieId);

        setCast(normalizedCast(cast));
        return cast;
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <ul className={css.actorsList}>
      {!cast.length ? (
        <p>Sorry, there is no information</p>
      ) : (
        cast.map(({ id, character, name, profile_path }) => {
          return (
            <li className={css.castItem} key={id}>
              <img
                className={css.actorsImg}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`
                }
                alt={name}
                width="200"
                height="300"
              />
              <div className={css.actorsName}>
                <p>{name}</p>
                <p>{character}</p>
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
}
