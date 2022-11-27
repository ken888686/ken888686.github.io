import React, { MouseEventHandler, ReactNode } from 'react';
import className from 'classnames';

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
  const { primary, secondary, success, warning, danger, outline, rounded, children, ...rest } =
    props;

  const classes = className('flex item-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-900 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-400 bg-yellow-400 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'bg-white': outline,
    'rounded-full': rounded,
    'text-blue-500': outline && primary,
    'text-gray-500': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger,
  });

  return (
    <button type='submit' className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
