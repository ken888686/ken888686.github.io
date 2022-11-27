import React, { ReactNode } from 'react';

interface Props {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
  children?: ReactNode;
}

const Button = (props: Props) => {
  const { children } = props;
  return <button type='submit'>{children}</button>;
};

export default Button;
