import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import Logo from '@app/components/logo/logo.component';
import useStyle from '@app/components/notFound/notFound.component.style';
import ROUTES from '@app/routes';
import useCommonStyle from '@app/style/variables/sizes';
import { PAGE_NOT_FOUND_PATH } from '@shared/interfaces/movies.model';
import cN from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  const s = useStyle();
  const { appContainer } = useCommonStyle();

  return (
    <div className={s.background}>
      <div className={cN(appContainer, s.notFoundContainer)}>
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
};

export default NotFound;
