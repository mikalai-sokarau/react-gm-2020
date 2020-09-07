import cN from '@app/utils/utils';
import React, { useState, FC } from 'react';
import { Genres } from '@app/mockData/movies.model';
import Dropdown from '@app/components/dropdown/dropdown.component';
import sortValues from '@app/components/preferenceBar/preferenceBar.model';
import useStyle from '@app/components/preferenceBar/preferenceBar.component.style';
import { IPreferenceBar } from '@app/components/preferenceBar/preferenceBar.interface';

const PreferenceBar: FC<IPreferenceBar> = ({ onGenreClick }) => {
  const s = useStyle();
  const [chosenDropdownItem, setDropdownItem] = useState(sortValues[0]);
  const [chosenGenre, setGenre] = useState(Genres.All);

  const genreClick = (genre: string) => {
    const g = genre.toLowerCase() as Genres;

    onGenreClick(g);
    setGenre(g);
  };

  return (
    <div className={s.preferenceBarContainer}>
      <div className={s.preferenceContainer}>
        {Object.keys(Genres).map((g) => (
          <button
            type="button"
            onClick={() => genreClick(g)}
            className={cN(s.preferenceButton, chosenGenre === g.toLowerCase() ? s.chosen : '')}
            key={g}
          >
            {g}
          </button>
        ))}
      </div>
      <Dropdown
        title={chosenDropdownItem.value}
        options={sortValues}
        onSortOptionClick={setDropdownItem}
      />
      <div className={s.borderLine} />
    </div>
  );
};

export default PreferenceBar;
