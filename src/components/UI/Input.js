export default function Input(props) {
  const {
    width, id, label, name, type, value, changeHandler, placeholder,
  } = props;
  return (
    <div className={width || 'w-full'}>
      <label
        htmlFor={id}
        className="font-medium label"
      >
        {label || 'Unknown'}
        :
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        className="w-full bg-white input input-primary"
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </div>
  );
}
