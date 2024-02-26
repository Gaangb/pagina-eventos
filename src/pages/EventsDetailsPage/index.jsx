import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";
import { PaymentContainer } from "../../components/TicketContainer";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import { useEffect } from "react";

export function EventsDetailsPage() {
  const { usuarios, setShowNavbar } = useEventsBuilder();
  const location = useLocation();
  const currentEvents = location.state.evento;
  useEffect(() => {
    setShowNavbar(false)
  })
  const donoEvento = usuarios.filter(
    (user) => user.id === currentEvents.usuarioId
  );

  return (
    <div className={styles.container_geral} >
      <div className={styles.container_content}>
        <div className={styles.container_content_top}>
          <img src={currentEvents.imagem} alt="imagem do evento" />
          <div className={styles.container_content_top_text}>
            <div>
              <h1>{currentEvents.nome}</h1>
              <p> <PersonPinOutlinedIcon /> {donoEvento[0].nome_estabelecimento}</p>
            </div>
            <div>
              <p>
                <RoomOutlinedIcon /> {currentEvents.local}
              </p>
              <p>
                <CalendarMonthOutlinedIcon />
                {currentEvents.data} - {currentEvents.horario}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.container_content_bottom}>
          <div className={styles.content_bottom_description}>
            <h2>Sobre o evento</h2>
            <p>{currentEvents.descricao}</p>
          </div>
          <PaymentContainer
            preco_camarote={currentEvents.preco_camarote}
            preco_pista={currentEvents.preco_pista}
            evento={currentEvents}
          />
        </div>
      </div>
    </div>
  );
}
