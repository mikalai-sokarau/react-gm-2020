import cN from '@app/utils/utils';
import React, { useState } from 'react';
import style from '@app/components/dropdown/dropdown.component.style';
import { IDropdown } from '@app/components/dropdown/dropdown.interface';

const Dropdown = ({ title, options, callback }: IDropdown): JSX.Element => {
  const classes = style();
  const [isDropdownOpen, toggleDropdown] = useState(false);

  return (
    <div onMouseLeave={() => toggleDropdown(false)}>
      <span className={classes.sortTitle}>sort by</span>
      <div
        className={cN(classes.dropdownContainer, isDropdownOpen ? 'open' : '')}
        onClick={() => toggleDropdown(!isDropdownOpen)}
      >
        <div role="menu" tabIndex={0} className={classes.dropdownTitle}>{title}</div>
        <ul className={classes.optionsList}>
          {options.map((o) => (
            <li
              className={classes.option}
              key={o.value}
              onClick={() => callback(o)}
              tabIndex={0}
              role="menuitem"
            >
              {o.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
