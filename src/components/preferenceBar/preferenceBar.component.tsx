import React, { useState } from 'react';
import { Genres } from '@app/mockData/movies.model';
import Dropdown from '@app/components/dropdown/dropdown.component';
import style from '@app/components/preferenceBar/preferenceBar.component.style';
import { sortValues } from '@app/components/preferenceBar/preferenceBar.model';

const PreferenceBar = ({ callback }: { callback: (genre: Genres) => void}): JSX.Element => {
  const s = style();
  const [chosenDropdownItem, setChosenDropdownItem] = useState(sortValues[0]);

  return (
    <div className={s.preferenceBarContainer}>
      <div className={s.preferenceContainer}>
        {Object.keys(Genres).map((g) => (
          <button
            type="button"
            onClick={() => callback(g.toLocaleLowerCase() as Genres)}
            className={s.preferenceButton}
            key={g}
          >
            {g}
          </button>
        ))}
      </div>
      <Dropdown
        title={chosenDropdownItem.value}
        options={sortValues}
        callback={setChosenDropdownItem}
      />
      <div className={s.borderLine} />
    </div>
  );
};

export default PreferenceBar;
