import ROUTES from '@app/routes';
import React, { FC } from 'react';
import { useHistory } from 'react-router';
import { useStoreon } from 'storeon/react';
import { ActionType } from '@app/store/store.interface';
import useStyle from '@app/components/logo/logo.component.style';

const Logo: FC = () => {
  const { common, firstPart, lastPart } = useStyle();
  const { dispatch } = useStoreon();
  const history = useHistory();

  return (
    <div
      className={common}
      onClick={() => {
        history.push(ROUTES.HOME);
        dispatch(ActionType.resetState);
      }}
    >
      <span className={firstPart}>netflix</span>
      <span className={lastPart}>roulette</span>
    </div>
  );
};

export default Logo;
