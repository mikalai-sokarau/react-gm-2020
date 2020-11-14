import cN from 'classnames';
import React, { FC } from 'react';
import { useField } from 'formik';
import withStyles from 'react-jss';
import styles from '@app/components/formField/formField.component.style';
import { IFormField } from '@app/components/formField/formField.interface';

const FormField: FC<IFormField> = ({
  name, type, value, text, classes,
}) => {
  const [{ onBlur, onChange }, { error, touched }] = useField({ name, type, value });
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
      {touched && error && <p data-testid={name} className={classes.error}>{error}</p>}
    </label>
  );
};

export default withStyles(styles)(FormField);
