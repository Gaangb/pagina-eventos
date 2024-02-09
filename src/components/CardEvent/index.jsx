import styles from "./styles.module.css";


export default function CardEvent({nome, local, data, horario}) {

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
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          alt=""
        />
      </div>
      <p>
        <b>Descrição:</b> Lorem ipsum dolor sit amet consectetur adipisicing
        elit.
      </p>
    </div>
  );
}
