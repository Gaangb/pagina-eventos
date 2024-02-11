import CardEvent from "../../components/CardEvent";
import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";
import { CreateEvent } from "../CreateEvent";

export function EventsPage() {
  const { eventos, showForm, toggleForm } = useEventsBuilder();


  return (
    <section className={styles.container_geral_events_page}>
      <div className={styles.container_navbar_events_page}>
        <input type="text" name="" id="" placeholder="Pesquise" />
        <button className={styles.button_navbar_events_page} onClick={toggleForm}>Criar evento</button>
        <button className={styles.button_navbar_events_page}>Minha conta</button>
        <button className={styles.button_sair_navbar_events_page}>Sair</button>
      </div>
      <div className={`${styles.container_events_page} `}>
        <div className={`${styles.container_events_page} ${showForm ? styles.modal_open : ""}`}>

      {showForm && <CreateEvent />}
        </div>
      <div className={styles.container_cards_events_page}>
        {eventos.map((event, index) => (
          <CardEvent key={index} {...event} />
        ))}
      </div>
    </div>
    </section >
  );
}
