import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";
import { useEffect } from "react";
import { loggedInUserJSON } from "../../utils/utils";

import styles from "./styles.module.css";
import CardEvent from "../CardEvent";
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';

export function MyEvents() {
    const { usuarios, eventos, setEventos, openEventsDetails } = useEventsBuilder();

    const [cadastro, setCadastro] = useState({
        id: 0,
        nome: '',
        cpf: '',
        nome_estabelecimento: '',
        email: '',
        senha: '',
    });


    useEffect(() => {
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

    const eventosFiltrados = eventos.filter(evento => evento.usuarioId === cadastro.id);

    return (
        <div className={styles.container_geral}>
            <h1><CelebrationOutlinedIcon />Meus Eventos</h1>
            <div className={styles.container_content}>
                {eventosFiltrados.map((event, index) => (
                    <CardEvent key={index} {...event} onClick={() => {openEventsDetails({...event})}}/>
                ))}
            </div>
        </div>
    )
}