import cN from 'classnames';
import React, { useState, FC } from 'react';
import { Genres } from '@app/mockData/movies.model';
import Dropdown from '@app/components/dropdown/dropdown.component';
import sortOptions from '@app/components/preferenceBar/preferenceBar.model';
import useStyle from '@app/components/preferenceBar/preferenceBar.component.style';
import { IPreferenceBar, ISortOption } from '@app/components/preferenceBar/preferenceBar.interface';

const PreferenceBar: FC<IPreferenceBar> = ({ onGenreClick, onSortingSelect }) => {
  const s = useStyle();
  const [chosenDropdownItem, setDropdownItem] = useState(sortOptions[0]);
  const [chosenGenre, setGenre] = useState(Genres.All);

  const genreClick = (genre: string) => {
    const g = genre.toLowerCase() as Genres;

    onGenreClick(g);
    setGenre(g);
  };
  const onSortingOptionClick = (option: ISortOption) => {
    setDropdownItem(option);
    onSortingSelect(option);
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
