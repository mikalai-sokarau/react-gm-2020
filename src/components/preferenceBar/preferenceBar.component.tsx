import cN from '@app/utils/utils';
import React, { useState } from 'react';
import { Genres } from '@app/mockData/movies.model';
import Dropdown from '@app/components/dropdown/dropdown.component';
import sortValues from '@app/components/preferenceBar/preferenceBar.model';
import style from '@app/components/preferenceBar/preferenceBar.component.style';

const PreferenceBar = ({ callback }: { callback: (genre: Genres) => void}): JSX.Element => {
  const s = style();
  const [chosenDropdownItem, setDropdownItem] = useState(sortValues[0]);
  const [chosenGenre, setGenre] = useState(Genres.All);

  const choseGenreCallback = (genre: string) => {
    const g = genre.toLowerCase() as Genres;

    callback(g);
    setGenre(g);
  };

  return (
    <div className={s.preferenceBarContainer}>
      <div className={s.preferenceContainer}>
        {Object.keys(Genres).map((g) => (
          <button
            type="button"
            onClick={() => choseGenreCallback(g)}
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
        callback={setDropdownItem}
      />
      <div className={s.borderLine} />
    </div>
  );
};

export default PreferenceBar;
