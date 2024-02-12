import CardEvent from "../../components/CardEvent";
import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";
import { CreateEvent } from "../CreateEvent";
import logo from "../../assets/logo.png"

export function EventsPage() {
  const { eventos, showForm, toggleForm, isLogged, setIsLogged } = useEventsBuilder();

  let loggedInUser = null;

  const loggedInUserJSON = localStorage.getItem("loggedInUser");

  if (loggedInUserJSON) {
    loggedInUser = JSON.parse(loggedInUserJSON);
    setIsLogged(true)
  }
  
  const handleLogOut = () => {
    setIsLogged(false)
    localStorage.removeItem("loggedInUser");
  }

  const buttons = isLogged ? (
    <>
      <button className={styles.button_navbar_events_page}>Criar evento</button>
      <button className={styles.button_navbar_events_page}>Minha conta</button>
      <button className={styles.button_sair_navbar_events_page} onClick={() => {handleLogOut()}}>Sair</button>
    </>
  ) : (
    <>
      <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/register'}>Criar conta</button>
      <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/login'}>Login</button>
    </>
  );

  return (
    <section className={styles.container_geral_events_page}>
      <div className={styles.container_navbar_events_page}>
        <img src={logo} alt="Logo" />
        <input type="text" name="" id="" placeholder="Pesquise" />
        {buttons}
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
