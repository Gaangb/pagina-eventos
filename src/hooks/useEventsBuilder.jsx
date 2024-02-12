import { createContext, useContext, useState } from "react";
import logo from "../assets/logo_login.png"

const EventContext = createContext();

export function EventProvider({ children }) {

  const [isLogged, setIsLogged] = useState(false);

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

  const [eventos, setEventos] = useState([
    {
      id: 1,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      preco: "R$ 20,00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
    },
    {
      id: 1,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      preco: "R$ 20,00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
    },
    {
      id: 1,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      preco: "R$ 20,00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
    },
    {
      id: 1,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      preco: "R$ 20,00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
    },
    {
      id: 1,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
      preco: "R$ 20,00",
      imagem: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Rock_in_Rio_-_Madrid_2012.jpg",
      descricao: "Rock in Rio",
    },
  ])

  const [showForm, setShowForm] = useState(false)

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
    }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventsBuilder() {
  return useContext(EventContext);
}
