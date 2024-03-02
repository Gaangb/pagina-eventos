import { useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

import { NotFound } from "../../components/NotFound";

import CardEvent from "../../components/CardEvent";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
import styles from "./styles.module.css";

export function EventsPage() {
  const {
    eventos,
    showComponentEventNotFound,
    setEventos,
    openEventsDetails,
    setShowNavbar,
    isFiltered,
    filteredEvents,
  } = useEventsBuilder();

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

  const renderEvents = isFiltered ? filteredEvents : eventos;

  return (
    <section className={styles.container_geral_events_page}>
      <div className={`${styles.container_events_page} `}>
        <h1>
          <CelebrationOutlinedIcon />
          Todos os eventos
        </h1>
        {showComponentEventNotFound ? (
          <NotFound />
        ) : (
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
        )}
      </div>
    </section>
  );
}
