import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      email: "administrador@gmail.com",
      senha: "senha123",
      cpf: "12345678900",
      nome: "admin",
    },
  ]);

  const [eventos, setEventos] = useState([
    {
      id: 1,
      nome: "Rock Rio",
      local: "Rio de Janeiro",
      data: "10/10/2021",
      horario: "20:00",
    },
    {
        id: 2,
        nome: "Rock  in Rio",
        local: "Rio de Janeiro",
        data: "10/10/2021",
        horario: "20:00",
      }

  ])
  return (
    <EventContext.Provider value={{ usuarios, setUsuarios, eventos, setEventos }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEventsBuilder() {
  return useContext(EventContext);
}
