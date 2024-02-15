import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./styles.module.css";
import CardEvent from "../CardEvent";

export function MyEvents() {
    const { usuarios, eventos, setEventos } = useEventsBuilder();

    const [cadastro, setCadastro] = useState({
        id: 0,
        nome: '',
        cpf: '',
        nome_estabelecimento: '',
        email: '',
        senha: '',
    });


    useEffect(() => {
        const loggedInUserJSON = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUserJSON) {
            setCadastro({
                id: loggedInUserJSON.id,
                nome: loggedInUserJSON.nome,
                cpf: loggedInUserJSON.cpf,
                nome_estabelecimento: loggedInUserJSON.nome_estabelecimento,
                email: loggedInUserJSON.email,
                senha: loggedInUserJSON.senha,
            });
        }
    }, []);

    const eventosFiltrados = eventos.filter(evento => evento.criador === cadastro.id);
    
    return (
        <div className={styles.container_content}>
            {eventosFiltrados.map((event, index) => (
                <CardEvent key={index} {...event} />
            ))}
        </div>
    )
}