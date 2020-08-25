import React from 'react';
import style from '@app/components/logo/logo.component.style';

const Logo = (): JSX.Element => {
  const { common, firstPart, lastPart } = style();

  return (
    <div className={common}>
      <span className={firstPart}>netflix</span>
      <span className={lastPart}>roulette</span>
    </div>
  );
};

export default Logo;
