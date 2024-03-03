import styles from "./styles.module.css";

export function ImageInput({ onChange, previewImage }) {
  return (
    <div className={styles.container_input}>
      <label htmlFor="imagem">Escolha sua imagem</label>
      <input
        type="file"
        name="imagem"
        accept="image/*"
        placeholder="Insira a imagem do evento"
        onChange={(e) => onChange(e.target.files[0])}
      />
    </div>
  );
}