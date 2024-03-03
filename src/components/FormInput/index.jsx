import styles from "./styles.module.css";

export function FormInput({value, className, type, name, accept, id, placeholder, onChange}) {
  return (
    <input
      required
      value={value}
      className={styles.input_create_event}
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
