import React, { FC } from 'react';
import { IMovie } from '@app/mockData/movies.model';
import useStyle from '@app/components/moviesList/moviesList.component.style';
import MovieItem from '@app/components/movieItem/movieItem.component';

const MoviesList: FC<{movies: Array<IMovie>}> = ({ movies }) => {
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
              />
            ))}
          </div>
        )
        : <p className={s.noItemsFound}>no movies found</p>}
    </section>
  );
};

export default MoviesList;
