export default function TextArea(props) {
  const {
    width, id, label, name, changeHandler, placeholder,
  } = props;

  return (
    <div className={`flex flex-col ${width || 'w-full'}`}>
      <label htmlFor={id} className="font-medium label">
        {label || 'Unknown'}
        :
      </label>
      <textarea
        id={id}
        name={name}
        className="h-24 mb-5 bg-white textarea textarea-primary textarea-bordered"
        onChange={changeHandler}
        placeholder={placeholder || ''}
      />
    </div>
  );
}
