import React from 'react';
import { IMovie } from '@app/mockData/movies.model';
import style from '@app/components/movieItem/movieItem.component.style';

const MovieItem = ({ movie }: { movie: IMovie }): JSX.Element => {
  const classes = style();

  return (
    <div>
      item
    </div>
  );
};

export default MovieItem;
