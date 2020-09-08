import cN from 'classnames';
import React, { useState, FC } from 'react';
import useStyle from '@app/components/movieItem/movieItem.component.style';
import { IMovieItem, MovieAction } from '@app/components/movieItem/movieItem.interface';

const MovieItem: FC<IMovieItem> = ({ movie, onMovieActionClick }) => {
  const s = useStyle();
  const [isMovieMenuOpened, setMovieMenuState] = useState(false);

  return (
    <figure
      className={s.movieContainer}
      onMouseLeave={() => setMovieMenuState(false)}
    >
      <img
        src={movie.imagePath}
        alt={movie.title}
        height="490px"
        width="320px"
        onClick={() => setMovieMenuState(false)}
      />
      <figcaption className={s.movieInfoContainer}>
        <div>
          <h3 className={s.title}>{movie.title}</h3>
          <p className={s.genresList}>
            {movie.genre.map((g) => (
              <span className={s.genre} key={g}>{g}</span>
            ))}
          </p>
        </div>
        <p>
          <span className={s.year}>
            {movie.year}
          </span>
        </p>
      </figcaption>
      <div
        className={s.tools}
        onClick={() => setMovieMenuState(!isMovieMenuOpened)}
      >
        <div className={cN(s.movieMenu, { open: isMovieMenuOpened })}>
          <div className={s.movieMenuContainer}>
            <ul className={s.movieMenuList}>
              <li onClick={() => onMovieActionClick(MovieAction.Edit)}>edit</li>
              <li onClick={() => onMovieActionClick(MovieAction.Delete)}>delete</li>
            </ul>
            <button
              type="button"
              className={s.closeButton}
              onClick={() => setMovieMenuState(!isMovieMenuOpened)}
            />
          </div>
        </div>
      </div>
    </figure>
  );
};

export default MovieItem;
