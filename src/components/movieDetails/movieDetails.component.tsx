import ROUTES from '@app/routes';
import withStyles from 'react-jss';
import { useStoreon } from 'storeon/react';
import React, { FC, useEffect } from 'react';
import commonStyles from '@app/style/variables/sizes';
import Logo from '@app/components/logo/logo.component';
import { useHistory, useParams } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NO_IMAGE_PATH } from '@shared/interfaces/movies.model';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionType, IState, StoreModule } from '@app/store/store.interface';
import genreStyles from '@app/components/movieItem/movieItem.component.style';
import styles from '@app/components/movieDetails/movieDetails.component.style';

const MovieDetails: FC<{ classes: { [key: string]: string } }> = ({ classes: s }) => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { dispatch, search: { chosenMovie: movie, text } } = useStoreon<IState>(StoreModule.search);

  useEffect(() => {
    const isEmptyOrNewMovie = !movie || movie.id !== Number(id);

    if (isEmptyOrNewMovie) {
      dispatch(ActionType.getMovieDetails, id);
    }
  }, [id]);

  return (
    <section className={s.movieDetailsContainer}>
      <div className={s.appContainer}>
        <header className={s.movieDetailsHeader}>
          <Logo />
          <FontAwesomeIcon
            className={s.backToSearchButton}
            icon={faSearch}
            onClick={() => {
              dispatch(ActionType.removeChosenMovie);
              history.push(text ? `${ROUTES.SEARCH}${text}` : ROUTES.HOME);
            }}
          />
        </header>
        {movie && (
          <figure className={s.movieDetails}>
            <img
              src={movie.imagePath}
              // eslint-disable-next-line no-return-assign
              onError={(e) => ((e.target as HTMLImageElement).src = NO_IMAGE_PATH)}
              alt={movie.title}
              height="435px"
              width="280px"
            />
            <figcaption className={s.movieDetailsData}>
              <div>
                <h2 className={s.movieTitle}>{movie.title}</h2>
                <span className={s.movieRating}>{movie.rating}</span>
              </div>
              <p className={s.genresList}>
                {movie.genre.map((g) => (
                  <span className={s.genre} key={g}>{g}</span>
                ))}
              </p>
              <div className={s.movieDetaisMetadata}>
                <span>{movie.releaseDate.slice(0, 4)}</span>
                <span>
                  {movie.duration}
                  {' '}
                  min
                </span>
              </div>
              <p className={s.movieDescription}>{movie.description}</p>
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );
};

export default withStyles({ ...styles, ...commonStyles, ...genreStyles })(MovieDetails);
