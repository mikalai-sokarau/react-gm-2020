import React, { FC } from 'react';
import MovieItem from '@app/components/movieItem/movieItem.component';
import IMoviesList from '@app/components/moviesList/moviesList.interface';
import useStyle from '@app/components/moviesList/moviesList.component.style';

const MoviesList: FC<IMoviesList> = ({ movies, onMovieImageClick }) => {
  const s = useStyle();

  return (
    <section>
      <div className={s.moviesAmount}>
        {movies.length}
        <span className={s.moviesAmountText}>movies found</span>
      </div>
      {movies.length
        ? (
          <div className={s.moviesContainer}>
            {movies.map((m) => (
              <MovieItem
                movie={m}
                key={m.id}
                onMovieActionClick={() => alert('Not implemented yet.')}
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
