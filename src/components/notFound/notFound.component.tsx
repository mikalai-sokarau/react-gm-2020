import cN from 'classnames';
import ROUTES from '@app/routes';
import React, { FC } from 'react';
import { useStoreon } from 'storeon/react';
import { useHistory } from 'react-router-dom';
import Logo from '@app/components/logo/logo.component';
import { ActionType } from '@app/store/store.interface';
import useCommonStyle from '@app/style/variables/sizes';
import Button from '@app/components/button/button.component';
import { ButtonType } from '@app/components/button/button.interface';
import { PAGE_NOT_FOUND_PATH } from '@shared/interfaces/movies.model';
import useStyle from '@app/components/notFound/notFound.component.style';

const NotFound: FC = () => {
  const s = useStyle();
  const history = useHistory();
  const { dispatch } = useStoreon();
  const { appContainer } = useCommonStyle();

  return (
    <div className={s.background}>
      <div className={cN(appContainer, s.notFoundContainer)}>
        <div className={s.logoContainer}>
          <Logo />
        </div>
        <h3>page not found</h3>
        <img src={PAGE_NOT_FOUND_PATH} alt="page not found" />
        <Button
          type={ButtonType.backToHome}
          onButtonClick={() => {
            history.push(ROUTES.HOME);
            dispatch(ActionType.resetState);
          }}
        />
      </div>
    </div>
  );
};

export default NotFound;
