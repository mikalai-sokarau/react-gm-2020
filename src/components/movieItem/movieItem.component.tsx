import useStyle from '@app/components/movieItem/movieItem.component.style';
import { IMovieItem } from '@app/components/movieItem/movieItem.interface';
import ROUTES from '@app/routes';
import { ModalContext } from '@shared/interfaces/coreModal.context';
import { ModalType } from '@shared/interfaces/coreModal.interface';
import { NO_IMAGE_PATH } from '@shared/interfaces/movies.model';
import cN from 'classnames';
import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const MovieItem: FC<IMovieItem> = ({ movie }) => {
  const s = useStyle();
  const [isMovieMenuOpened, setMovieMenuState] = useState(false);
  const { setChosenModal } = useContext(ModalContext);

  return (
    <figure
      className={s.movieContainer}
      onMouseLeave={() => setMovieMenuState(false)}
    >
      <Link to={`${ROUTES.MOVIE_DETAILS}${movie.id}`}>
        <img
          src={movie.imagePath}
          alt={movie.title}
          // eslint-disable-next-line no-return-assign
          onError={(e) => (e.target as HTMLImageElement).src = NO_IMAGE_PATH}
          height="490px"
          width="320px"
          onClick={() => setMovieMenuState(false)}
        />
      </Link>
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
            {movie.releaseDate.slice(0, 4)}
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
              <li onClick={() => setChosenModal({ type: ModalType.Edit, movie })}>
                edit
              </li>
              <li onClick={() => setChosenModal({ type: ModalType.Delete, movie })}>
                delete
              </li>
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
