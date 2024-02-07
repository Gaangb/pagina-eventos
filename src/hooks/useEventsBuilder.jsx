import {
    createContext,
    useContext,
    useState,
    useEffect,
    useMemo,
} from "react";

const EventContext = createContext();

export function EventProvider({ children }) {

    const [usuarios, setUsuarios] = useState([{ id: 1, email: 'administrador@gmail.com', senha: 'senha123', cpf: '12345678900', nome: 'admin' }]);

    return (
        <EventContext.Provider value={{usuarios, setUsuarios}}>
            {children}
        </EventContext.Provider>
    );
}

export function useEventsBuilder() {

    return useContext(EventContext);
}


