import React from 'react';
import style from '@app/components/preferenceBar/preferenceBar.component.style';
import { preferenceList, sortList } from '@app/components/preferenceBar/preferenceBar.model';

const getListWithItems = (
  items: Array<string>,
  listClass: string,
  listItemClass?: string,
): JSX.Element => (
  <div className={listClass}>
    {items.map((i) => (
      <button type="button" className={listItemClass} key={i}>
        {i}
      </button>
    ))}
  </div>
);

const PreferenceBar = (): JSX.Element => {
  const c = style();

  return (
    <div className={c.preferenceBarContainer}>
      {getListWithItems(preferenceList, c.preferenceContainer, c.preferenceButton)}
      {getListWithItems(sortList, c.sortList)}
    </div>
  );
};

export default PreferenceBar;
