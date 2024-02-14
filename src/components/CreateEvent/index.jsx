import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";

export function CreateEvent() {

  const { eventos, setEventos, toggleForm } = useEventsBuilder();
  const [cadastroEvento, setCadastroEvento] = useState({
    nome: "",
    local: "",
    data: "",
    horario: "",
    imagem: null,
    descricao: "",
    preco_pista: 0,
    preco_camarote: 0,
    ingressos_pista: 0,
    ingressos_camarote: 0
  })

  const handleSubmit = (event) => {
    event.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(cadastroEvento.imagem);
    reader.onloadend = function () {
      const base64data = reader.result;

      const novoEvento = {
        id: eventos.length + 1,
        nome: cadastroEvento.nome,
        local: cadastroEvento.local,
        data: cadastroEvento.data,
        horario: cadastroEvento.horario,
        imagem: base64data,
        descricao: cadastroEvento.descricao,
        preco_pista: cadastroEvento.preco_pista,
        preco_camarote: cadastroEvento.preco_camarote,
        ingressos_pista: cadastroEvento.ingressos_pista,
        ingressos_camarote: cadastroEvento.ingressos_camarote
      }

      setEventos(prevEventos => [...prevEventos, novoEvento]);
      toggleForm(event);
    }
  }

  const handleDateChange = (e) => {
    const inputDate = new Date(e.target.value);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 2);

    if (inputDate < currentDate) {
      alert('A data do evento deve ser pelo menos dois dias após a data atual.');
    } else {
      setCadastroEvento({ ...cadastroEvento, data: e.target.value });
    }
  }

  const handleIngressosChange = (e) => {
    const { name, value } = e.target;

    if (value < 0) {
      alert('O valor não pode ser menor que 0.');
    } else {
      setCadastroEvento(prevState => ({ ...prevState, [name]: value }));
    }
  }

  console.log("eventos  : " + eventos)
  return (
    <div className={styles.container_create_event_page}>
      <form onSubmit={handleSubmit} action="submit" className={styles.form_geral_create_event_page} encType="multipart/form-data">
        <div className={styles.form_titulo_create_event_page}>
          <h1>Criar novo evento</h1>
        </div>
        <div className={styles.form_create_event_page}>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="imagem">
                Escolha sua imagem
              </label>
              <input type="file" name="imagem" id="" accept="image/*" placeholder="Insira a imagem do evento" onChange={(e) => setCadastroEvento({ ...cadastroEvento, imagem: e.target.files[0] })} />
            </div>
            <div className={styles.container_input}>
              {cadastroEvento.imagem && (
                <img src={URL.createObjectURL(cadastroEvento.imagem)} alt="" className={styles.preview_image} />
              )}
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="nome">Nome do evento</label>
              <input className={styles.input_create_event} type="text" name="nome" id="" placeholder="Festa de aniversário" onChange={(e) => setCadastroEvento({ ...cadastroEvento, nome: e.target.value })} />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="local">Local do evento</label>
              <input className={styles.input_create_event} type="text" name="local" id="" placeholder="Praça de eventos" onChange={(e) => setCadastroEvento({ ...cadastroEvento, local: e.target.value })} />
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="data">Data do evento</label>
              <input className={styles.input_create_event} type="date" name="data" id="" onBlur={handleDateChange} />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="horario">Horario do evento</label>
              <input className={styles.input_create_event} type="time" name="horario" id="" placeholder="20:00" onChange={(e) => setCadastroEvento({ ...cadastroEvento, horario: e.target.value })} />
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="" ingressos_pista>Quantidade ingressos pista</label>
              <input className={styles.input_create_event} type="number" name="ingressos_pista" id="" placeholder="100" onChange={handleIngressosChange} />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="preco_pista">Preço ingresso pista</label>
              <input className={styles.input_create_event} type="number" name="preco_pista" id="" placeholder="R$ 0,00" onChange={handleIngressosChange} />
            </div>
          </div>
          <div>
            <div className={styles.container_input}>
              <label htmlFor="ingressos_camarote">Quantidade ingressos camarote</label>
              <input className={styles.input_create_event} type="number" name="ingressos_camarote" id="" placeholder="100" onChange={handleIngressosChange} />
            </div>
            <div className={styles.container_input}>
              <label htmlFor="preco_camarote">Preço ingresso camarote</label>
              <input className={styles.input_create_event} type="number" name="preco_camarote" id="" placeholder="R$ 0,00" onChange={handleIngressosChange} />
            </div>
          </div>
          <div className={styles.container_description}>
            <label htmlFor="descricao">Descrição do evento</label>
            <textarea className={styles.input_create_event} name="descricao" id="" placeholder="Open bar" onChange={(e) => setCadastroEvento({ ...cadastroEvento, descricao: e.target.value })}></textarea>
          </div>
          <div className={styles.container_buttons}>
            <button type="submit">Criar evento</button>
            <button type="submit" onClick={(e) => toggleForm(e)} >Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  )
}