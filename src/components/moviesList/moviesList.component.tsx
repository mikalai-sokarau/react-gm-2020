import React from 'react';
import style from '@app/components/moviesList/moviesList.component.style';

const MoviesList = (): JSX.Element => {
  const s = style();

  return (
    <section>
      <div className={s.moviesAmount}>
        20
        <span className={s.moviesAmountText}>movies found</span>
      </div>
    </section>
  );
};

export default MoviesList;
