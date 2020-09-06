import React from 'react';
import style from '@app/components/dropdown/dropdown.component.style';
import { IDropdown } from '@app/components/dropdown/dropdown.interface';

const Dropdown = ({ title, options, callback }: IDropdown): JSX.Element => {
  const classes = style();

  return (
    <div>
      <span className={classes.sortTitle}>sort by</span>
      <div className={classes.dropdownContainer}>
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
