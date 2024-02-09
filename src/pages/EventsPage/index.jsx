import CardEvent from "../../components/CardEvent";
import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

export function EventsPage() {
    const { eventos } = useEventsBuilder();


  return (
    <section className={styles.container_geral_events_page}>
      <div className={styles.container_navbar_events_page}>
        <input type="text" name="" id="" placeholder="Pesquise" />
        <a href="">
          <p>criar evento</p>
        </a>
        <a href="">
          <p>minha conta</p>
        </a>
        <button>Sair</button>
      </div>
      <div className={styles.container_events_page}>
        <div>
        {eventos.map((event, index) => (
            <CardEvent key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
