import ROUTES from '@app/routes';
import React, { FC } from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import styles from '@app/components/logo/logo.component.style';

const Logo: FC<{ classes: { [key: string]: string } }> = ({ classes }) => {
  const { common, firstPart, lastPart } = classes;

  return (
    <Link to={ROUTES.HOME}>
      <div className={common}>
        <span className={firstPart}>netflix</span>
        <span className={lastPart}>roulette</span>
      </div>
    </Link>
  );
};

export default withStyles(styles)(Logo);
