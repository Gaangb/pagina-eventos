import styles from "./styles.module.css";


export default function CardEvent({nome, local, data, horario, imagem, descricao}) {

  return (
    <div className={styles.container_geral_events_page}>
      <div>
        <div className={styles.container_titulo_events_page}>
          <h1>{nome}</h1>
          <p>Local: {local}</p>
          <p>Data: {data}</p>
          <p>Horario: {horario}</p>
        </div>
        <img
          src={imagem}
          alt=""
        />
      </div>
      <div>
      <p>
        <b>Descrição:</b> {descricao}
      </p>
      </div>
    </div>
  );
}
