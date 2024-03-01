import { useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

import CardEvent from "../../components/CardEvent";
import styles from "./styles.module.css";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";

export function EventsPage() {
  const { eventos, setEventos, openEventsDetails, setShowNavbar, isFiltered, filteredEvents, setFilteredEvents, setIsFiltered } =
    useEventsBuilder();

  useEffect(() => {
    if (eventos.length) {
      localStorage.setItem("eventos", JSON.stringify(eventos));
    }
  }, [eventos]);

  useEffect(() => {
    setShowNavbar(true);
    const eventosLocalStorage = JSON.parse(localStorage.getItem("eventos"));
    setEventos(eventosLocalStorage);
  }, []);

  // useEffect(() => {
  //   if(!isFiltered) {

  //   }
  // })
  console.log('isFiltered', isFiltered);

  const renderEvents  = isFiltered ? filteredEvents : eventos;

  return (
    <section className={styles.container_geral_events_page}>
      <div className={`${styles.container_events_page} `}>
        <h1>
          <CelebrationOutlinedIcon />
          Todos os eventos
        </h1>
        <div className={styles.container_cards_events_page}>
          {renderEvents.map((event, index) => (
            <CardEvent
              key={index}
              {...event}
              onClick={() => {
                openEventsDetails({ ...event });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
