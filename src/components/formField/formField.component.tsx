import useStyle from '@app/components/formField/formField.component.style';
import { IFormField } from '@app/components/formField/formField.interface';
import cN from 'classnames';
import { useField } from 'formik';
import React, { FC } from 'react';

const FormField: FC<IFormField> = ({
  name, type, value, text,
}) => {
  const [{ onBlur, onChange }, { error, touched }] = useField({ name, type, value });
  const s = useStyle();

  return (
    <label htmlFor={name}>
      {text || name}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={cN({
          correct: touched && !error,
          hasError: touched && error,
        })}
      />
      {touched && error && <p data-testid={name} className={s.error}>{error}</p>}
    </label>
  );
};

export default FormField;
