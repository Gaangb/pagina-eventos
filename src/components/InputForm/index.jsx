export function InputForm({value, className, type, name, accept, id, placeholder, onChange}) {
  return (
    <input
      required
      value={value}
      className={className}
      type={type}
      name={"name"}
      accept={accept}
      id={id}
      placeholder={placeholder}
      onChange={() => onChange}
    />
  );
}
