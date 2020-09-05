import React, { useState } from 'react';
import style from '@app/components/preferenceBar/preferenceBar.component.style';
import { preferenceList, sortValues } from '@app/components/preferenceBar/preferenceBar.model';
import Dropdown from '@app/components/dropdown/dropdown.component';

const PreferenceBar = (): JSX.Element => {
  const c = style();
  const [chosenDropdownItem, setChosenDropdownItem] = useState(sortValues[0]);

  return (
    <div className={c.preferenceBarContainer}>
      <div className={c.preferenceContainer}>
        {preferenceList.map((b) => (
          <button type="button" className={c.preferenceButton} key={b}>
            {b}
          </button>
        ))}
      </div>
      <Dropdown
        title={chosenDropdownItem.value}
        options={sortValues}
        callback={setChosenDropdownItem}
      />
    </div>
  );
};

export default PreferenceBar;
