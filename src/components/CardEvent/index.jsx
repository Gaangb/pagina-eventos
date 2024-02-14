import styles from "./styles.module.css";


export default function CardEvent({nome, local, data, horario, imagem, descricao}) {

  return (
    <div className={styles.container_geral_events_page}>
      <div className={styles.container_imagem_titulo_events_page}>
        <div className={styles.container_titulo_events_page}>
          <h1>{nome}</h1>
          <p>Local: {local}</p>
          <p>Data: {data}</p>
          <p className={styles.hide_on_phone}>Horario: {horario}</p>
        </div>
        <img
          src={imagem}
          alt=""
        />
      </div>
      <div>
      <p className={styles.hide_on_phone}>
        <b >Descrição:</b>{descricao}
      </p>
      </div>
    </div>
  );
}
