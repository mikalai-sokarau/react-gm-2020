import React, { useState, FC } from 'react';
import MovieService from '@app/services/movies.service';
import { EMPTY_MOVIE } from '@app/mockData/movies.model';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import { IModal } from '@app/components/modals/coreModal/coreModal.interface';
import MultipleDropdown from '@app/components/multipleDropdown/multipleDropdown.component';
import useStyle from '@app/components/modals/movieDetailsModal/movieDetailsModal.component.style';
import {
  IValidationState,
  VALIDATION_DEFAULT_STATE,
} from '@app/components/modals/movieDetailsModal/movieDetailsModal.interface';

const MovieDetailsModal: FC<IModal> = ({ onConfirmClick, onCancelClick, modalDetails }) => {
  const s = useStyle();
  const movieData = MovieService.getMovieById(modalDetails.movie) || EMPTY_MOVIE;
  const [movie, changeMovie] = useState({ ...movieData });
  const [validationState, setValidationState] = useState(VALIDATION_DEFAULT_STATE);

  const isFormValid: () => boolean = () => {
    const newValidationState = {
      title: !movie.title,
      releaseDate: !movie.releaseDate,
      url: !movie.url,
      genre: !movie.genre.length,
      description: !movie.description,
      duration: !movie.duration,
    };

    setValidationState(newValidationState);

    return !Object.values(newValidationState).includes(true);
  };

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
              onChange={({ target: { value: title } }) => {
                changeMovie({ ...movie, title });
                setValidationState({ ...validationState, title: !title });
              }}
            />
            {validationState.title && <p className={s.error}>please add the title.</p>}
          </label>
          <label htmlFor="movieYear">
            release date
            <input
              type="date"
              id="movieYear"
              value={movie.releaseDate}
              onChange={({ target: { value: releaseDate } }) => {
                changeMovie({ ...movie, releaseDate });
                setValidationState({ ...validationState, releaseDate: !releaseDate });
              }}
            />
            {validationState.releaseDate
              && (
                <p className={s.error}>
                  please choose a release date.
                </p>
              )}
          </label>
          <label htmlFor="movieUrl">
            movie url
            <input
              type="url"
              id="movieUrl"
              value={movie.url}
              onChange={({ target: { value: url } }) => {
                changeMovie({ ...movie, url });
                setValidationState({ ...validationState, url: !url });
              }}
            />
            {validationState.url && <p className={s.error}>please add the url.</p>}
          </label>
          <label htmlFor="movieGenre">
            genre
            <MultipleDropdown
              genres={movie.genre}
              onGenreClick={(genre) => {
                changeMovie({ ...movie, genre });
                setValidationState({ ...validationState, genre: !genre.length });
              }}
            />
            {validationState.genre && <p className={s.error}>please choose at least one genre.</p>}
          </label>
          <label htmlFor="movieDescription">
            overview
            <textarea
              id="movieDescription"
              value={movie.description}
              onChange={({ target: { value: description } }) => {
                changeMovie({ ...movie, description });
                setValidationState({ ...validationState, description: !description });
              }}
            />
            {validationState.description && <p className={s.error}>please add the overview.</p>}
          </label>
          <label htmlFor="movieDuration">
            runtime
            <input
              type="number"
              id="movieDuration"
              value={movie.duration}
              onChange={({ target: { value: duration } }) => {
                changeMovie({ ...movie, duration });
                setValidationState({ ...validationState, duration: !duration });
              }}
            />
            {validationState.duration && <p className={s.error}>please add the duration.</p>}
          </label>
        </form>
      </div>
      <div className={s.modalButtons}>
        <Button
          type={ButtonType.reset}
          onButtonClick={() => {
            changeMovie({
              ...EMPTY_MOVIE,
              id: movie.id,
              rating: movie.rating,
              imagePath: movie.imagePath,
            });
            setValidationState(VALIDATION_DEFAULT_STATE);
          }}
        />
        <Button
          type={ButtonType.submit}
          onButtonClick={() => isFormValid() && onConfirmClick(movie)}
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
