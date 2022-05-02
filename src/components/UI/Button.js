/* eslint-disable react/button-has-type */
import classes from './Button.module.scss';

export default function Button(props) {
  const {
    type, className, onClick, disabled, children,
  } = props;
  return (
    <button
      type={type || 'button'}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
