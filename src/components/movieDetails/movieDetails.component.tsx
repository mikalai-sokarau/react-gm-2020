import React, { FC } from 'react';
import Logo from '@app/components/logo/logo.component';
import useCommonStyle from '@app/style/variables/sizes';
import useStyle from '@app/components/movieDetails/movieDetails.component.style';
import useGenreStyle from '@app/components/movieItem/movieItem.component.style';
import IMovieDetails from '@app/components/movieDetails/movieDetails.interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MovieDetails: FC<IMovieDetails> = ({ movie, onBackButtonClick }) => {
  const s = useStyle();
  const genreStyles = useGenreStyle();
  const { appContainer } = useCommonStyle();

  return (
    <section className={s.movieDetailsContainer}>
      <div className={appContainer}>
        <header className={s.movieDetailsHeader}>
          <Logo />
          <FontAwesomeIcon
            className={s.backToSearchButton}
            onClick={onBackButtonClick}
            icon={faSearch}
          />
        </header>
        <figure className={s.movieDetails}>
          <img
            src={movie.imagePath}
            alt={movie.title}
            height="435px"
            width="280px"
          />
          <figcaption className={s.movieDetailsData}>
            <div>
              <h2 className={s.movieTitle}>{movie.title}</h2>
              <span className={s.movieRating}>{movie.rating}</span>
            </div>
            <p className={genreStyles.genresList}>
              {movie.genre.map((g) => (
                <span className={genreStyles.genre} key={g}>{g}</span>
              ))}
            </p>
            <div className={s.movieDetaisMetadata}>
              <span>{movie.year}</span>
              <span>
                {movie.duration}
                {' '}
                min
              </span>
            </div>
            <p className={s.movieDescription}>{movie.description}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default MovieDetails;
