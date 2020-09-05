import React, { useState } from 'react';
import style from '@app/components/preferenceBar/preferenceBar.component.style';
import { preferenceList, sortValues } from '@app/components/preferenceBar/preferenceBar.model';
import Dropdown from '@app/components/dropdown/dropdown.component';

const PreferenceBar = (): JSX.Element => {
  const s = style();
  const [chosenDropdownItem, setChosenDropdownItem] = useState(sortValues[0]);

  return (
    <div className={s.preferenceBarContainer}>
      <div className={s.preferenceContainer}>
        {preferenceList.map((b) => (
          <button type="button" className={s.preferenceButton} key={b}>
            {b}
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
