import React, { FC, useEffect, useState } from 'react';
import IMoviesList from '@app/components/moviesList/moviesList.interface';
import useStyle from '@app/components/moviesList/moviesList.component.style';

const MoviesList: FC<IMoviesList> = ({ getMovies }) => {
  const s = useStyle();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(getMovies());
  }, [getMovies]);

  return (
    <section>
      <div className={s.moviesAmount}>
        {movies.length}
        <span className={s.moviesAmountText}>movies found</span>
      </div>
      {movies.length
        ? (
          <div className={s.moviesContainer}>
            {movies}
          </div>
        )
        : <p className={s.noItemsFound}>no movies found</p>}
    </section>
  );
};

export default MoviesList;
