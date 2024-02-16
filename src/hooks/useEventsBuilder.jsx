import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { eventosPreDefinidos, usuariosPredefinidos } from "../utils/utils";

import logo from "../assets/logo_login.png"

const EventContext = createContext();

export function EventProvider({ children }) {
  const [customClassNavBar, setCustomClassNavBar] = useState("container_navbar_events_page")
  const [isLogged, setIsLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [showForm, setShowForm] = useState(false)
  const [showComponentsUserPage, setShowComponentsUserPage] = useState('UserAccount')

  const [usuarios, setUsuarios] = useState(() => {
    const usuariosLocalStorage = JSON.parse(localStorage.getItem('usuarios'));

    if (usuariosLocalStorage) {
      const idsLocalStorage = new Set(usuariosLocalStorage.map(usuario => usuario.id));
      const usuariosPredefinidosNovos = usuariosPredefinidos.filter(usuario => !idsLocalStorage.has(usuario.id));
      return [...usuariosPredefinidosNovos, ...usuariosLocalStorage];
    } else {
      return usuariosPredefinidos;
    }
  });

  const [eventos, setEventos] = useState(() => {
    const eventosLocalStorage = JSON.parse(localStorage.getItem('eventos'));

    if (eventosLocalStorage) {
      const idsLocalStorage = new Set(eventosLocalStorage.map(evento => evento.id));
      const eventosPreDefinidosNovos = eventosPreDefinidos.filter(evento => !idsLocalStorage.has(evento.id));
      return [...eventosPreDefinidosNovos, ...eventosLocalStorage];
    } else {
      return eventosPreDefinidos;
    }
  });

  const showLogo = <img src={logo} alt="Logo" onClick={() => location.href = "/"} />

  const deleteEvent = useCallback((id) => {
    const updatedEvents = eventos.filter((event) => event.id !== id);
    setEventos(updatedEvents);
  }, [eventos]);

  useEffect(() => {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    if (loggedInUserJSON) {
      setLoggedInUser(loggedInUserJSON);
      setIsLogged(true)
    }
  }, [isLogged, loggedInUser]);

  const handleLogOut = () => {
    setIsLogged(false)
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      location.reload();
    })
  }

  const toggleForm = (e) => {
    e.preventDefault()
    setShowForm(!showForm)
  }

  return (
    <EventContext.Provider value={{
      customClassNavBar,
      eventos,
      isLogged,
      loggedInUser,
      loggedInUserJSON: localStorage.getItem("loggedInUser"),
      showComponentsUserPage,
      showForm,
      showLogo,
      usuarios,
      setUsuarios,
      setEventos,
      setShowForm,
      toggleForm,
      setIsLogged,
      handleLogOut,
      setCustomClassNavBar,
      setShowComponentsUserPage,
      deleteEvent,
    }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventsBuilder() {
  return useContext(EventContext);
}
