import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import moment from "moment";
import { minDate, maxDate } from "../../utils/utils";

import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { loggedInUserJSON } from "../../utils/utils";
import { ImageInput } from "../ImageInput";
import { DateInput } from "../DateInput";
import { FormInput } from "../FormInput";
import AlertDialogModal from "../AlertDialogModal";

import styles from "./styles.module.css";
import "react-toastify/dist/ReactToastify.css";

export function CreateEventModal() {
  const { eventos, setEventos, toggleForm, currentEvent, setCurrentEvent } =
    useEventsBuilder();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [cadastro, setCadastro] = useState({
    id: 0,
    nome: "",
    cpf: "",
    nome_estabelecimento: "",
    email: "",
    senha: "",
    imagem: "",
  });

  const [cadastroEvento, setCadastroEvento] = useState({
    nome: "",
    usuarioId: 0,
    local: "",
    data: "",
    horario: "",
    imagem: null,
    descricao: "",
    preco_pista: "",
    preco_camarote: "",
    ingressos_pista: "",
    ingressos_camarote: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentEvent.id) {
      // Atualização de evento existente
      if (cadastroEvento.imagem instanceof File) {
        // Se uma nova imagem foi fornecida durante a atualização
        const reader = new FileReader();
        reader.readAsDataURL(cadastroEvento.imagem);
        reader.onloadend = function () {
          const base64data = reader.result;
          const updatedEvent = {
            ...currentEvent,
            ...cadastroEvento,
            imagem: base64data,
          };
          setEventos((prevEventos) =>
            prevEventos.map((event) =>
              event.id === currentEvent.id ? updatedEvent : event
            )
          );
          localStorage.setItem("eventos", JSON.stringify(updatedEvent));
          toggleForm(event);
          toast.success("Evento atualizado com sucesso");
        };
      } else {
        const updatedEvent = {
          ...currentEvent,
          ...cadastroEvento,
        };
        setEventos((prevEventos) =>
          prevEventos.map((event) =>
            event.id === currentEvent.id ? updatedEvent : event
          )
        );
        localStorage.setItem("eventos", JSON.stringify(updatedEvent));
        toggleForm(event);
        toast.success("Evento atualizado com sucesso");
      }
    } else {
      // Criação de novo evento
      const reader = new FileReader();
      reader.readAsDataURL(cadastroEvento.imagem);
      reader.onloadend = function () {
        const base64data = reader.result;
        const novoEvento = {
          id: eventos.length > 0 ? eventos[eventos.length - 1].id + 1 : 1,
          usuarioId: cadastro.id,
          nome: cadastroEvento.nome,
          local: cadastroEvento.local,
          data: cadastroEvento.data,
          horario: cadastroEvento.horario,
          imagem: base64data,
          descricao: cadastroEvento.descricao,
          preco_pista: cadastroEvento.preco_pista,
          preco_camarote: cadastroEvento.preco_camarote,
          ingressos_pista: cadastroEvento.ingressos_pista,
          ingressos_camarote: cadastroEvento.ingressos_camarote,
        };
        setEventos((prevEventos) => [...prevEventos, novoEvento]);
        localStorage.setItem(
          "eventos",
          JSON.stringify([...eventos, novoEvento])
        );
        toggleForm(event);
        toast.success("Evento criado com sucesso");
      };
    }

    setCadastroEvento({
      nome: "",
      usuarioId: 0,
      local: "",
      data: "",
      horario: "",
      imagem: null,
      descricao: "",
      preco_pista: "",
      preco_camarote: "",
      ingressos_pista: "",
      ingressos_camarote: "",
    });
    setCurrentEvent({
      nome: "",
      usuarioId: 0,
      local: "",
      data: "",
      horario: "",
      imagem: null,
      descricao: "",
      preco_pista: "",
      preco_camarote: "",
      ingressos_pista: "",
      ingressos_camarote: "",
    });
  };

  const handleDateChange = (e) => {
    const inputDate = moment(e.target.value);
    const formattedDate = inputDate.format("YYYY-MM-DD");

    setSelectedDate(formattedDate);
    setCadastroEvento({ ...cadastroEvento, data: formattedDate });
  };

  const handleIngressosChange = (e) => {
    const { name, value } = e.target;

    if (value < 0) {
      setModalOpen(true);
      setCadastroEvento((prevState) => ({
        ...prevState, [name]: '',
      }))
    } else {
      setCadastroEvento((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    toggleForm(e);
    setCurrentEvent({
      nome: "",
      usuarioId: 0,
      local: "",
      data: "",
      horario: "",
      imagem: null,
      descricao: "",
      preco_pista: "",
      preco_camarote: "",
      ingressos_pista: "",
      ingressos_camarote: "",
    });
  };

  useEffect(() => {
    setCadastroEvento({
      ...currentEvent,
    });
  }, [currentEvent]);

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

  const handleImageChange = (image) => {
    setCadastroEvento({ ...cadastroEvento, imagem: image });
  };

  return (
    <div className={styles.container_create_event_page}>
      <form
        onSubmit={handleSubmit}
        action="submit"
        className={styles.form_geral_create_event_page}
        encType="multipart/form-data"
      >
        <div className={styles.form_titulo_create_event_page}>
          {!currentEvent.id ? <h1>Criar evento</h1> : <h1>Atualizar evento</h1>}
        </div>
        <div className={styles.form_create_event_page}>
          <div>
            <ImageInput onChange={handleImageChange} />
            <div className={styles.container_input}>
              {cadastroEvento.imagem && (
                <img
                  src={
                    currentEvent.imagem
                      ? cadastroEvento.imagem
                      : URL.createObjectURL(cadastroEvento.imagem)
                  }
                  alt="imagem do evento"
                  className={styles.preview_image}
                />
              )}
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="nome">Nome do evento</label>
              <FormInput
                required
                value={cadastroEvento.nome}
                className={styles.input_create_event}
                type="text"
                name="nome"
                placeholder="Festa de aniversário"
                onChange={(e) =>
                  setCadastroEvento({ ...cadastroEvento, nome: e.target.value })
                }
              />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="local">Local do evento</label>
              <FormInput
                required
                value={cadastroEvento.local}
                className={styles.input_create_event}
                type="text"
                name="local"
                placeholder="Praça de eventos"
                onChange={(e) =>
                  setCadastroEvento({
                    ...cadastroEvento,
                    local: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <DateInput
                selectedDate={selectedDate}
                onChange={handleDateChange}
                currentEvent={currentEvent}
              />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="horario">Horario do evento</label>
              <FormInput
                required
                value={cadastroEvento.horario}
                className={styles.input_create_event}
                type="time"
                name="horario"
                placeholder="20:00"
                onChange={(e) =>
                  setCadastroEvento({
                    ...cadastroEvento,
                    horario: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="ingressos_pista">
                Quantidade ingressos pista
              </label>
              <FormInput
                value={cadastroEvento.ingressos_pista}
                className={styles.input_create_event}
                type="number"
                name="ingressos_pista"
                placeholder="100"
                id="ingressos_pista_input"
                onChange={(e) => handleIngressosChange(e)}
              />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="preco_pista">Preço ingresso pista</label>
              <FormInput
                value={cadastroEvento.preco_pista}
                className={styles.input_create_event}
                type="number"
                name="preco_pista"
                id=""
                placeholder="R$ 0,00"
                onChange={handleIngressosChange}
              />
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="ingressos_camarote">
                Quantidade ingressos camarote
              </label>
              <FormInput
                value={cadastroEvento.ingressos_camarote}
                className={styles.input_create_event}
                type="number"
                name="ingressos_camarote"
                placeholder="100"
                onChange={handleIngressosChange}
              />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="preco_camarote">Preço ingresso camarote</label>
              <FormInput
                value={cadastroEvento.preco_camarote}
                className={styles.input_create_event}
                type="number"
                name="preco_camarote"
                placeholder="R$ 0,00"
                onChange={handleIngressosChange}
              />
            </div>
          </div>
          <div className={styles.container_description}>
            <label htmlFor="descricao">Descrição do evento</label>
            <textarea
              required
              value={cadastroEvento.descricao}
              className={styles.input_create_event}
              name="descricao"
              id=""
              placeholder="Open bar"
              onChange={(e) =>
                setCadastroEvento({
                  ...cadastroEvento,
                  descricao: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className={styles.container_buttons}>
            <button type="submit" onClick={handleCancelButton}>
              Cancelar
            </button>
            {!currentEvent.id ? (
              <button type="submit">Criar evento</button>
            ) : (
              <button type="submit">Atualizar evento</button>
            )}
          </div>
        </div>
      </form>
      {modalOpen && (
        <AlertDialogModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          hidden={true}
          title="Ação não permitida"
          text="O valor não pode ser menor que 0."
        />
      )}
    </div>
  );
}
