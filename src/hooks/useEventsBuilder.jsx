import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

import {
  eventosPreDefinidos,
  loggedInUserJSON,
  usuariosPredefinidos,
} from "../utils/utils";

import logo from "../assets/logo_login.png";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [currentEvent, setCurrentEvent] = useState({});
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const [customClassNavBar, setCustomClassNavBar] = useState(
    "container_navbar_events_page"
  );
  const [showComponentsUserPage, setShowComponentsUserPage] =
    useState("UserAccount");

  const [usuarios, setUsuarios] = useState(() => {
    const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    console.log(usuariosLocalStorage);

    if (Array.isArray(usuariosLocalStorage)) {
      const idsLocalStorage = new Set(
        usuariosLocalStorage.map((usuario) => usuario.id)
      );
      const usuariosPredefinidosNovos = usuariosPredefinidos.filter(
        (usuario) => !idsLocalStorage.has(usuario.id)
      );
      return [...usuariosPredefinidosNovos, ...usuariosLocalStorage];
    } else {
      return usuariosPredefinidos;
    }
  });

  const [eventos, setEventos] = useState(() => {
    const eventosLocalStorage = JSON.parse(localStorage.getItem("eventos"));

    if (Array.isArray(eventosLocalStorage)) {
      const idsLocalStorage = new Set(
        eventosLocalStorage.map((evento) => evento.id)
      );
      const eventosPreDefinidosNovos = eventosPreDefinidos.filter(
        (evento) => !idsLocalStorage.has(evento.id)
      );
      return [...eventosPreDefinidosNovos, ...eventosLocalStorage];
    } else {
      return eventosPreDefinidos;
    }
  });

  const showLogo = (
    <img src={logo} alt="Logo" onClick={() => (location.href = "/")} />
  );

  const openEventsDetails = (evento) => {
    navigate(`/eventos/${evento.id}`, { state: { evento } });
  };


  const deleteEvent = useCallback(
    (id) => {
      const updatedEvents = eventos.filter((event) => event.id !== id);
      setEventos(updatedEvents);
    },
    [eventos]
  );

  const handleLogOut = () => {
    setIsLogged(false);
    localStorage.removeItem("loggedInUser");
    setTimeout(() => {
      location.reload();
    });
  };

  const toggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  useEffect(() => {
    if (loggedInUserJSON) {
      setLoggedInUser(loggedInUserJSON);
      setIsLogged(true);
    }
  }, [isLogged, loggedInUser]);

  return (
    <EventContext.Provider
      value={{
        currentEvent,
        customClassNavBar,
        eventos,
        isLogged,
        loggedInUser,
        loggedInUserJSON: localStorage.getItem("loggedInUser"),
        showComponentsUserPage,
        showForm,
        showLogo,
        usuarios,
        openEventsDetails,
        showNavbar,
        setCurrentEvent,
        setUsuarios,
        setEventos,
        setShowForm,
        toggleForm,
        setIsLogged,
        handleLogOut,
        setCustomClassNavBar,
        setShowComponentsUserPage,
        deleteEvent,
        setShowNavbar,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export function useEventsBuilder() {
  return useContext(EventContext);
}
