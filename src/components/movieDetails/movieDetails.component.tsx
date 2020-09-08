import React, { FC } from 'react';
import useCommonStyle from '@app/style/variables/sizes';
import useStyle from '@app/components/main/main.component.style';
import IMovieDetails from '@app/components/movieDetails/movieDetails.interface';

const MovieDetails: FC<IMovieDetails> = ({ movie, onBackButtonClick }) => {
  const s = useStyle();
  const { appContainer } = useCommonStyle();

  return (
    <section>
      <div className={appContainer}>
        {movie.title}
      </div>
    </section>
  );
};

export default MovieDetails;
