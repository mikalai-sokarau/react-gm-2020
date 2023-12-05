import useStyle from '@app/components/logo/logo.component.style';
import ROUTES from '@app/routes';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Logo: FC = () => {
  const { common, firstPart, lastPart } = useStyle();

  return (
    <Link to={ROUTES.HOME} className={common}>
      <span className={firstPart}>movie</span>
      <span className={lastPart}>roulette</span>
    </Link>
  );
};

export default Logo;
