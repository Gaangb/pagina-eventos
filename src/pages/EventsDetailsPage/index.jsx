import { useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";
import { PaymentContainer } from "../../components/TicketContainer";

export function EventsDetailsPage() {

    const { eventos, setEventos, usuarios } = useEventsBuilder();
    const location = useLocation();
    const currentEvents = location.state.evento;

    const donoEvento = usuarios.filter((user) => user.id === currentEvents.usuarioId)

    return (
        <div className={styles.container_geral}>
            <div className={styles.container_content}>
                <div className={styles.container_content_top}>
                    <img src={currentEvents.imagem} alt="imagem do evento" />
                    <div className={styles.container_content_top_text}>
                        <div>
                            <h1>{currentEvents.nome}</h1>
                            <p>Produzido por: {donoEvento[0].nome_estabelecimento}</p>
                        </div>
                        <p>{currentEvents.data}</p>
                        <p>{currentEvents.horario}</p>
                    </div>
                </div>
                <div className={styles.container_content_bottom}>
                    <div className={styles.content_bottom_description}>
                        <h2>Sobre o evento</h2>
                        <p>{currentEvents.descricao}</p>
                    </div>
                    <PaymentContainer local={currentEvents.local} preco_camarote={currentEvents.preco_camarote} preco_pista={currentEvents.preco_pista}/>
                </div>
            </div>
        </div>
    )
}