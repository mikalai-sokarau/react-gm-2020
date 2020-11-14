import cN from 'classnames';
import ROUTES from '@app/routes';
import React, { FC } from 'react';
import withStyles from 'react-jss';
import { Link } from 'react-router-dom';
import Logo from '@app/components/logo/logo.component';
import commonStyles from '@app/style/variables/sizes';
import styles from '@app/pages/NotFound/notFound.page.style';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import { PAGE_NOT_FOUND_PATH } from '@shared/interfaces/movies.model';

const NotFoundPage: FC<
{ classes?: { [key: string]: string } }
> = ({ classes: s }) => (
  <div className={s.background}>
    <div className={cN(s.appContainer, s.notFoundContainer)}>
      <div className={s.logoContainer}>
        <Logo />
      </div>
      <h3>page not found</h3>
      <img src={PAGE_NOT_FOUND_PATH} alt="page not found" />
      <Link to={ROUTES.HOME}>
        <Button type={ButtonType.backToHome} />
      </Link>
    </div>
  </div>
);

export default withStyles({ ...styles, ...commonStyles })(NotFoundPage);
