import React, { forwardRef, ForwardRefRenderFunction } from 'react';

import styles from './styles.module.scss';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  inputType: "filled" | "outlined";
  type: "text" | "password";
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { inputType, type, error, ...rest },
  ref
) => {
  return (
    <div className={styles.input__container}>
      <input
        {...rest}
        className={`${styles.input__element} ${
          inputType == "filled" ? styles.filled : styles.outlined
        }`}
        type={type}
        ref={ref}
        autoComplete="off"
      />
      <span>{error}</span>
    </div>
  );
};

export const Input = forwardRef(InputBase);
