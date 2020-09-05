import React from 'react';
import { IMovie } from '@app/mockData/movies.model';
import style from '@app/components/moviesList/moviesList.component.style';
import MovieItem from '@app/components/movieItem/movieItem.component';

const MoviesList = ({ movies }: { movies : Array<IMovie> }): JSX.Element => {
  const s = style();

  return (
    <section>
      <div className={s.moviesAmount}>
        20
        <span className={s.moviesAmountText}>movies found</span>
      </div>
      <ul>
        {movies.map((m) => <MovieItem movie={m} key={m.id} />)}
      </ul>
    </section>
  );
};

export default MoviesList;
