import React, { FC } from 'react';
import { useStoreon } from 'storeon/react';
import { IMovie } from '@shared/interfaces/movies.model';
import { StoreModule } from '@app/store/store.interface';
import MovieItem from '@app/components/movieItem/movieItem.component';
import IMoviesList from '@app/components/moviesList/moviesList.interface';
import useStyle from '@app/components/moviesList/moviesList.component.style';

const MoviesList: FC<IMoviesList> = ({ onMovieImageClick }) => {
  const s = useStyle();
  const { movies } = useStoreon(StoreModule.movies);

  return (
    <section>
      <div className={s.moviesAmount}>
        {movies.length}
        <span className={s.moviesAmountText}>movies found</span>
      </div>
      {movies.length
        ? (
          <div className={s.moviesContainer}>
            {movies.map((m: IMovie) => (
              <MovieItem
                movie={m}
                key={m.id}
                onMovieImageClick={() => onMovieImageClick(m)}
              />
            ))}
          </div>
        )
        : <p className={s.noItemsFound}>no movies found</p>}
    </section>
  );
};

export default MoviesList;
