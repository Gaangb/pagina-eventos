import { useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";
import { Filter } from "@mui/icons-material";
import QuantityInput from "../../components/QuantityInput";

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
                    <div className={styles.content_bottom_prices}>
                        <p>Local do evento: {currentEvents.local}</p>
                        <div>
                            <p>Preço pista: R$ {currentEvents.preco_pista},00</p>
                            <QuantityInput />
                        </div>
                        <div>
                            <p>Preço camarote: R$ {currentEvents.preco_camarote},00</p>
                            <div>
                                <QuantityInput />
                            </div>
                        </div>
                        <button>Comprar ingressos</button>
                    </div>
                </div>
            </div>
        </div>
    )
}