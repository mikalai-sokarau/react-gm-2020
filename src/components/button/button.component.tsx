import React from 'react';
import cN from '@app/utils/utils';
import style from '@app/components/button/button.component.style';
import { IButton, ButtonType, BUTTON_TEXT } from '@app/components/button/button.interface';

const Button = ({ type, onButtonClick }: IButton): JSX.Element => {
  const { button, ...classes } = style();
  const buttonClassName = ButtonType[type];

  return (
    <input
      type="button"
      className={cN(button, classes[buttonClassName])}
      value={BUTTON_TEXT[type]}
      onClick={onButtonClick}
    />
  );
};

export default Button;
