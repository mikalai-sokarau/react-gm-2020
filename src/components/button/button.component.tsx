import cN from 'classnames';
import React, { FC } from 'react';
import withStyles from 'react-jss';
import styles from '@app/components/button/button.component.style';
import { IButton, ButtonType, BUTTON_TEXT } from '@app/components/button/button.interface';

const Button: FC<IButton> = ({
  type, isDisabled, onButtonClick, classes,
}) => {
  const { button, ...other } = classes;
  const buttonClassName = ButtonType[type];

  return (
    <input
      type="button"
      className={cN(button, other[buttonClassName], { disabled: isDisabled })}
      value={BUTTON_TEXT[type]}
      onClick={onButtonClick}
      disabled={isDisabled}
    />
  );
};

export default withStyles(styles)(Button);
