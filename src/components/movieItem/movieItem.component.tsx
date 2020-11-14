import cN from 'classnames';
import ROUTES from '@app/routes';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import React, { useState, FC, useContext } from 'react';
import { NO_IMAGE_PATH } from '@shared/interfaces/movies.model';
import { ModalType } from '@shared/interfaces/coreModal.interface';
import { ModalContext } from '@shared/interfaces/coreModal.context';
import styles from '@app/components/movieItem/movieItem.component.style';
import { IMovieItem } from '@app/components/movieItem/movieItem.interface';

const DEFAULT_IMAGE_SIZE = {
  height: '490px',
  width: '320px',
};

const MovieItem: FC<IMovieItem> = ({ movie, classes: s }) => {
  const [isMovieMenuOpened, setMovieMenuState] = useState(false);
  const { setChosenModal } = useContext(ModalContext);

  return (
    <figure
      className={s.movieContainer}
      onMouseLeave={() => setMovieMenuState(false)}
    >
      <Link to={`${ROUTES.MOVIE_DETAILS}${movie.id}`} className={s.imageContainer}>
        <object
          data={movie.imagePath}
          type="image/jpg"
          height={DEFAULT_IMAGE_SIZE.height}
          width={DEFAULT_IMAGE_SIZE.width}
        >
          <img
            src={NO_IMAGE_PATH}
            alt={movie.title}
            height={DEFAULT_IMAGE_SIZE.height}
            width={DEFAULT_IMAGE_SIZE.width}
            onClick={() => setMovieMenuState(false)}
          />
        </object>
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

export default withStyles(styles)(MovieItem);
