import cN from 'classnames';
import { useStoreon } from 'storeon/react';
import React, { useState, FC } from 'react';
import { Genres, IMovieSortOptions } from '@shared/interfaces/movies.model';
import Dropdown from '@app/components/dropdown/dropdown.component';
import sortOptions from '@app/components/preferenceBar/preferenceBar.model';
import useStyle from '@app/components/preferenceBar/preferenceBar.component.style';
import { IPreferenceBar, ISortOption, ISortOrderBy } from '@app/components/preferenceBar/preferenceBar.interface';

const PreferenceBar: FC<IPreferenceBar> = ({ onGenreClick }) => {
  const s = useStyle();
  const [chosenDropdownItem, setDropdownItem] = useState(sortOptions[0]);
  const [chosenGenre, setGenre] = useState(Genres.All);
  const { dispatch } = useStoreon('sort');

  const genreClick = (genre: string) => {
    const g = genre.toLowerCase() as Genres;

    onGenreClick(g);
    setGenre(g);
  };
  const onSortingOptionClick = (option: ISortOption) => {
    setDropdownItem(option);
    dispatch(
      '/movies/sort',
      {
        option: option.value,
        order: option.value === IMovieSortOptions.title
          ? ISortOrderBy.asc
          : ISortOrderBy.desc,
      },
    );
  };

  return (
    <div className={s.preferenceBarContainer}>
      <div className={s.preferenceContainer}>
        {Object.keys(Genres).map((g) => (
          <button
            type="button"
            onClick={() => genreClick(g)}
            className={cN(s.preferenceButton, { [s.chosen]: chosenGenre === g.toLowerCase() })}
            key={g}
          >
            {g}
          </button>
        ))}
      </div>
      <Dropdown
        title={chosenDropdownItem.title}
        options={sortOptions}
        onSortOptionClick={onSortingOptionClick}
      />
      <div className={s.borderLine} />
    </div>
  );
};

export default PreferenceBar;
