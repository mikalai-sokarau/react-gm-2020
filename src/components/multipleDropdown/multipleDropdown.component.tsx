import cN from 'classnames';
import React, { FC, useState } from 'react';
import { Genres } from '@app/mockData/movies.model';
import useClickedOutside from '@app/hooks/clickOutside';
import useStyle from '@app/components/multipleDropdown/multipleDropdown.component.style';
import IMultipleDropdown from '@app/components/multipleDropdown/multipleDropdown.interface';

const MultipleDropdown: FC<IMultipleDropdown> = ({ genres, onGenreClick }) => {
  const s = useStyle();
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const isClickedOutside = useClickedOutside(s.dropdownContainer);

  if (isClickedOutside && isDropdownOpen) {
    toggleDropdown(false);
  }

  const handleGenresClick = (genre: Genres): void => {
    const chosenGenres = genres.includes(genre)
      ? genres.filter((g) => g !== genre)
      : [...genres, genre];

    onGenreClick(chosenGenres);
  };

  return (
    <div className={cN(s.dropdownContainer, { open: isDropdownOpen })}>
      <div
        role="menu"
        tabIndex={0}
        className={s.dropdownTitle}
        onClick={() => toggleDropdown(!isDropdownOpen)}
      >
        select genre
      </div>
      <ul className={s.optionsList}>
        {Object.values(Genres).map((g) => g !== Genres.All && (
          <li
            className={s.option}
            key={g}
            tabIndex={0}
            role="menuitem"
          >
            <label htmlFor={g}>
              <input
                id={g}
                readOnly
                type="checkbox"
                checked={genres.includes(g)}
                onClick={() => handleGenresClick(g)}
              />
              <span className={s.checkmark} />
              <span>{g}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultipleDropdown;
