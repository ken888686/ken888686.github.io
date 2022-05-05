/* eslint-disable react/button-has-type */

export default function Button(props) {
  const {
    type, size, color, onClick, disabled, children,
  } = props;
  const classSettings = `btn ${size} ${color}`;
  return (
    <button
      type={type || 'button'}
      className={classSettings}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
