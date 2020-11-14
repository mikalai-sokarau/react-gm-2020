import cN from 'classnames';
import withStyles from 'react-jss';
import React, { useState, FC } from 'react';
import styles from '@app/components/dropdown/dropdown.component.style';
import { IDropdown } from '@app/components/dropdown/dropdown.interface';

const Dropdown: FC<IDropdown> = ({
  title, options, onSortOptionClick, classes: s,
}) => {
  const [isDropdownOpen, toggleDropdown] = useState(false);

  return (
    <div onMouseLeave={() => toggleDropdown(false)}>
      <span className={s.sortTitle}>sort by</span>
      <div
        className={cN(s.dropdownContainer, { open: isDropdownOpen })}
        onClick={() => toggleDropdown(!isDropdownOpen)}
      >
        <div role="menu" tabIndex={0} className={s.dropdownTitle}>{title}</div>
        <ul className={s.optionsList}>
          {options.map((o) => (
            <li
              className={s.option}
              key={o.title}
              onClick={() => onSortOptionClick(o)}
              tabIndex={0}
              role="menuitem"
            >
              {o.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default withStyles(styles)(Dropdown);
