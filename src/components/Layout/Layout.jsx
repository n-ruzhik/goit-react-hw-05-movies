import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <>
      <header className={css.header}>
        <ul className={css.navList}>
          <li className={css.navListItem}>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
          </li>
          <li className={css.navListItem}>
            <NavLink to="/movies" className={css.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Suspense
          fallback={
            <div className={css.loader}>
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#ff7e31"
                ariaLabel="ball-triangle-loading"
                wrapperStyle=""
                visible={true}
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
