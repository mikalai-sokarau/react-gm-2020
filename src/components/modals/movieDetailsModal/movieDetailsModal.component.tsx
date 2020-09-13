import React, { useState, FC } from 'react';
import MovieService from '@app/services/movies.service';
import { EMPTY_MOVIE } from '@app/mockData/movies.model';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import { IModal } from '@app/components/modals/coreModal/coreModal.interface';
import MultipleDropdown from '@app/components/multipleDropdown/multipleDropdown.component';
import useStyle from '@app/components/modals/movieDetailsModal/movieDetailsModal.component.style';

const MovieDetailsModal: FC<IModal> = ({ onConfirmClick, onCancelClick, modalDetails }) => {
  const s = useStyle();
  const movieData = MovieService.getMovieById(modalDetails.movieId) || EMPTY_MOVIE;
  const [movie, changeMovie] = useState({ ...movieData });

  return (
    <div className={s.background}>
      <h2 className={s.modalTitle}>
        {modalDetails.type}
        {' '}
        movie
      </h2>
      <div className={s.scrollContainer}>
        <form className={s.modalForm} autoComplete="off">
          <label htmlFor="movieTitle">
            title
            <input
              type="text"
              id="movieTitle"
              value={movie.title}
              onChange={(e) => changeMovie({ ...movie, title: e.target.value })}
            />
          </label>
          <label htmlFor="movieYear">
            release date
            <input
              type="date"
              id="movieYear"
              value={movie.releaseDate}
              onChange={(e) => changeMovie({ ...movie, releaseDate: e.target.value })}
            />
          </label>
          <label htmlFor="movieUrl">
            movie url
            <input
              type="url"
              id="movieUrl"
              value={movie.url}
              onChange={(e) => changeMovie({ ...movie, url: e.target.value })}
            />
          </label>
          <label htmlFor="movieGenre">
            genre
            <MultipleDropdown
              genres={movie.genre}
              onGenreClick={(genre) => changeMovie({ ...movie, genre })}
            />
          </label>
          <label htmlFor="movieDescription">
            overview
            <textarea
              id="movieDescription"
              value={movie.description}
              onChange={(e) => changeMovie({ ...movie, description: e.target.value })}
            />
          </label>
          <label htmlFor="movieDuration">
            runtime
            <input
              type="number"
              id="movieDuration"
              value={movie.duration}
              onChange={(e) => changeMovie({ ...movie, duration: e.target.value })}
            />
          </label>
        </form>
      </div>
      <div className={s.modalButtons}>
        <Button
          type={ButtonType.reset}
          onButtonClick={() => changeMovie(EMPTY_MOVIE)}
        />
        <Button
          type={ButtonType.submit}
          onButtonClick={onConfirmClick}
        />
      </div>
      <button
        type="button"
        className={s.closeButton}
        onClick={onCancelClick}
      />
    </div>
  );
};

export default MovieDetailsModal;
