import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
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
    setModalOpen(!modalOpen);
    setEventToDeleteId(id);
    console.log("deletar", modalOpen);

  };

  const handleDelete = () => {
    deleteEvent(eventToDeleteId);
    localStorage.setItem("eventos", JSON.stringify([]));
    toast.success("Evento deletado com sucesso");
  };

  return (
    <div className={styles.container_geral} >
      <div className={styles.container_imagem_titulo}>
        <div>
          <img src={imagem} alt="" />
        </div>
        <div className={styles.container_titulo}>
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
          title="Tem certeza que deseja excluir este evento? A ação não poderá ser desfeita."
        />
      )}
    </div>
  );
}
