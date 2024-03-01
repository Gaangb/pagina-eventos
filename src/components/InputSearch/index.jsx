import SearchIcon from '@mui/icons-material/Search';
import styles from "./styles.module.css";

export function InputSearch({ onChange }) {
  return (
    <div className={styles.input_container}>
      <input
        type="text"
        name=""
        id=""
        placeholder="Pesquise"
        onChange={onChange}
      />
      <SearchIcon color="secondary" />
    </div>
  );
}
