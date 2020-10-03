import cN from 'classnames';
import { useStoreon } from 'storeon/react';
import React, { useState, FC } from 'react';
import { IState } from '@app/store/store.interface';
import Dropdown from '@app/components/dropdown/dropdown.component';
import { Genres, IMovieSortOptions } from '@shared/interfaces/movies.model';
import sortOptions from '@app/components/preferenceBar/preferenceBar.model';
import useStyle from '@app/components/preferenceBar/preferenceBar.component.style';
import { ISortOption, ISortOrderBy } from '@app/components/preferenceBar/preferenceBar.interface';

const PreferenceBar: FC = () => {
  const s = useStyle();
  const [chosenDropdownItem, setDropdownItem] = useState(sortOptions[0]);
  const [chosenGenre, setGenre] = useState(Genres.All);
  const { dispatch, search: { text } } = useStoreon<IState>('search');

  const genreClick = (clickedGenre: string) => {
    const genre = clickedGenre.toLowerCase() as Genres;

    dispatch('/search/filter', { text, genre });
    setGenre(genre);
  };
  const onSortingOptionClick = (option: ISortOption) => {
    setDropdownItem(option);
    dispatch(
      '/search/sort',
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
