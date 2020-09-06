import React from 'react';
import { IMovie } from '@app/mockData/movies.model';
import style from '@app/components/moviesList/moviesList.component.style';
import MovieItem from '@app/components/movieItem/movieItem.component';

const MoviesList = ({ movies }: { movies: Array<IMovie> }): JSX.Element => {
  const s = style();

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
                callback={() => alert('Not implemented yet.')}
              />
            ))}
          </div>
        )
        : <p className={s.noItemsFound}>no movies found</p>}
    </section>
  );
};

export default MoviesList;
