import { useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

import CardEvent from "../../components/CardEvent";
import styles from "./styles.module.css";
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';

export function EventsPage() {
  const { eventos, setEventos} = useEventsBuilder();

  useEffect(() => {
    if (eventos.length) {
      localStorage.setItem('eventos', JSON.stringify(eventos));
    }
  }, [eventos]);
  
  useEffect(() => {
    const eventosLocalStorage = JSON.parse(localStorage.getItem('eventos'));
    setEventos(eventosLocalStorage);
  }, []);

  return (
    <section className={styles.container_geral_events_page}>
      <div className={`${styles.container_events_page} `}>
        <h1><CelebrationOutlinedIcon />Todos os eventos</h1>
        <div className={styles.container_cards_events_page}>
          {eventos.map((event, index) => (
            <CardEvent key={index} {...event} />
          ))}
        </div>
      </div>
    </section >
  );
}
