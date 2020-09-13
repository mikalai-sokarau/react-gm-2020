import cN from 'classnames';
import React, { useState, FC, useContext } from 'react';
import useStyle from '@app/components/movieItem/movieItem.component.style';
import { IMovieItem } from '@app/components/movieItem/movieItem.interface';
import { ModalType } from '@app/components/modals/coreModal/coreModal.interface';
import { ModalContext } from '@app/components/modals/coreModal/coreModal.context';

const MovieItem: FC<IMovieItem> = ({ movie, onMovieImageClick }) => {
  const s = useStyle();
  const [isMovieMenuOpened, setMovieMenuState] = useState(false);
  const { setChosenModal } = useContext(ModalContext);

  const onImageClick = () => {
    onMovieImageClick();
    setMovieMenuState(false);
  };

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
        onClick={onImageClick}
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
              <li onClick={() => setChosenModal({ type: ModalType.Edit, movieId: movie.id })}>
                edit
              </li>
              <li onClick={() => setChosenModal({ type: ModalType.Delete, movieId: movie.id })}>
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
