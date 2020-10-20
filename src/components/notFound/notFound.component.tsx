import cN from 'classnames';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '@app/components/logo/logo.component';
import useCommonStyle from '@app/style/variables/sizes';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import { PAGE_NOT_FOUND_PATH } from '@shared/interfaces/movies.model';
import useStyle from '@app/components/notFound/notFound.component.style';

const NotFound: FC = () => {
  const s = useStyle();
  const history = useHistory();
  const { appContainer } = useCommonStyle();

  return (
    <div className={s.background}>
      <div className={cN(appContainer, s.notFoundContainer)}>
        <div className={s.logoContainer}>
          <Logo />
        </div>
        <h3>page not found</h3>
        <img src={PAGE_NOT_FOUND_PATH} alt="page not found" />
        <Button type={ButtonType.backToHome} onButtonClick={() => history.push('/')} />
      </div>
    </div>
  );
};

export default NotFound;
