import { ToastContainer, toast } from "react-toastify";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { CreateEventModal } from "../CreateEventModal";
import { InputSearch } from "../InputSearch";

import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

export function NavBar() {
  const {
    eventos,
    toggleForm,
    isLogged,
    handleLogOut,
    showForm,
    customClassNavBar,
    showNavbar,
    filteredEvents,
    setFilteredEvents,
    setIsFiltered,
  } = useEventsBuilder();

  const handleCreateEventModal = (e) => {
    toggleForm(e);
  };

  const onInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (!value.trim()) {
      setFilteredEvents(eventos);
      return;
    }

    const filteredEvents = eventos.filter((event) => {
      return event.nome.toLowerCase().includes(value);
    });
    setIsFiltered(true);
    setFilteredEvents(filteredEvents);
  };

  function renderButtons() {
    if (isLogged && showNavbar) {
      return (
        <>
          <InputSearch onChange={onInputChange} />
          <button
            className={styles.button_navbar_events_page}
            onClick={(e) => {
              handleCreateEventModal(e);
            }}
          >
            Criar evento
          </button>
          <button
            className={styles.button_navbar_events_page}
            onClick={() => {
              location.href = "/minha-conta";
            }}
          >
            Minha conta
          </button>
          <button
            className={styles.button_sair_navbar_events_page}
            onClick={() => {
              handleLogOut();
            }}
          >
            Sair
          </button>
        </>
      );
    } else if (!isLogged && showNavbar) {
      return (
        <>
          <InputSearch onChange={onInputChange} />
          <button
            className={styles.button_login_navbar_events_page}
            onClick={() => (location.href = "/register")}
          >
            Criar conta
          </button>
          <button
            className={styles.button_login_navbar_events_page}
            onClick={() => (location.href = "/login")}
          >
            Login
          </button>
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <>
      <ToastContainer />

      <div className={styles[customClassNavBar]}>
        <img src={logo} alt="Logo" onClick={() => (location.href = "/")} />
        {renderButtons()}
      </div>
      <div
        className={`${styles.container_events_page} ${
          showForm ? styles.modal_open : ""
        }`}
      >
        {showForm && <CreateEventModal />}
      </div>
    </>
  );
}
