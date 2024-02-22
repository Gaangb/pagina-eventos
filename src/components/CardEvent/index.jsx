import { useState, useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { loggedInUserJSON } from "../../utils/utils";


import styles from "./styles.module.css";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import AlertDialogModal from "../AlertDialogModal";
export default function CardEvent({
  id,
  usuarioId,
  nome,
  local,
  data,
  horario,
  imagem,
  descricao,
  onClick,
}) {

  const { eventos, showForm, setShowForm, deleteEvent, setCurrentEvent } =
    useEventsBuilder();
  const [modalOpen, setModalOpen] = useState(false);
  const [eventToDeleteId, setEventToDeleteId] = useState(null);
  const [cadastro, setCadastro] = useState({
    id: 0,
    nome: "",
    cpf: "",
    nome_estabelecimento: "",
    email: "",
    senha: "",
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
        imagem: loggedInUserJSON.imagem,
      });
    }
  }, []);

  const onEditButtonClick = () => {
    setShowForm(!showForm);
    setCurrentEvent({ ...eventos.find((event) => event.id === id) });
  };

  const RenderEditButton = () => {
    if (cadastro.id === usuarioId) {
      return (
        <button
          onClick={() => onEditButtonClick()}
          className={styles.action_button}
          id="edit"
        >
          <DriveFileRenameOutlineOutlinedIcon />
        </button>
      );
    }
  };

  const RenderDeleteButton = () => {
    if (cadastro.id === usuarioId) {
      return (
        <button
          id="delete"
          className={styles.action_button}
          onClick={() => onDeleteButtonClick(id)}
        >
          <DeleteForeverOutlinedIcon />
        </button>
      );
    }
  };

  const onDeleteButtonClick = (id) => {
    // Chama o AlertDialogModal quando o botão de deletar for clicado
    setModalOpen(!modalOpen);
    setEventToDeleteId(id);
    console.log("deletar", modalOpen);

  };

  const handleDelete = () => {
    deleteEvent(eventToDeleteId);
    localStorage.setItem("eventos", JSON.stringify([]));
  };

  return (
    <div className={styles.container_geral_events_page} >
      <div className={styles.container_imagem_titulo_events_page}>
        <img src={imagem} alt="" />
        <div className={styles.container_titulo_events_page}>
          <h1>{nome}</h1>
          <p>
            <RoomOutlinedIcon /> {local}
          </p>
          <p>
            <CalendarMonthOutlinedIcon /> {data} - {horario}{" "}
          </p>
        </div>
      </div>
      <div>
        <div className={styles.card_footer}>
          <div className={styles.card_footer_buttons}>
            {RenderEditButton()}
            {RenderDeleteButton()}
          </div>
          <div>
            <button onClick={onClick}>Ver detalhes do evento <ArrowForwardIosOutlinedIcon /></button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <AlertDialogModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          handleDelete={handleDelete}
          handleClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
