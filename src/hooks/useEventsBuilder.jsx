import { createContext, useContext, useEffect, useState } from "react";
import logo from "../assets/logo_login.png"

const EventContext = createContext();

export function EventProvider({ children }) {

  const [isLogged, setIsLogged] = useState(false);

  const [showForm, setShowForm] = useState(false)

  const [customClassNavBar, setCustomClassNavBar] = useState("container_navbar_events_page")

  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      email: "administrador@gmail.com",
      senha: "senha123",
      cpf: "12345678900",
      nome: "admin",
      nome_estabelecimento: "Feira Eventos",
    },  
  ]);

  const eventosPreDefinidos = [
    {
      id: 1,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
    },
    {
      id: 2,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
      ingressos_pista: 100,
      ingressos_camarote: 100,
      preco_pista: 100,
      preco_camarote: 100,
    },
    {
      id: 3,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
      ingressos_pista: 100,
      ingressos_camarote: 100,
      preco_pista: 100,
      preco_camarote: 100,
    }
  ];

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


  useEffect(() => {
    let loggedInUser = null;

    const loggedInUserJSON = localStorage.getItem("loggedInUser");
  
    if (loggedInUserJSON) {
        loggedInUser = JSON.parse(loggedInUserJSON);
        setIsLogged(true)
    }
  }, [isLogged]);

  const handleLogOut = () => {
    setIsLogged(false)
    localStorage.removeItem("loggedInUser");
}

  const toggleForm = (e) => {
    e.preventDefault()
    setShowForm(!showForm)
  }

  const showLogo = <img src={logo} alt="Logo" onClick={ () => location.href = "/"}/>

  return (
    <EventContext.Provider value={{
      usuarios,
      setUsuarios,
      eventos,
      setEventos,
      showForm,
      setShowForm,
      toggleForm,
      isLogged,
      setIsLogged,
      showLogo,
      handleLogOut,
      customClassNavBar,
      setCustomClassNavBar,
    }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventsBuilder() {
  return useContext(EventContext);
}
