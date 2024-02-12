import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";

export function CreateEvent() {

  const { usuarios, eventos, setEventos, toggleForm } = useEventsBuilder();
  const [cadastroEvento, setCadastroEvento] = useState({
    nome: "",
    local: "",
    data: "",
    horario: "",
    imagem: null,
    descricao: ""
  })

  const handleSubmit = (event) => {

    event.preventDefault();
    const novoEvento = {
      id: eventos.length + 1,
      nome: cadastroEvento.nome,
      local: cadastroEvento.local,
      data: cadastroEvento.data,
      horario: cadastroEvento.horario,
      imagem: URL.createObjectURL(cadastroEvento.imagem),
      descricao: cadastroEvento.descricao
    }
    setEventos([...eventos, novoEvento]);
    toggleForm(event);
  }

  return (
    <div className={styles.container_create_event_page}>
      <form onSubmit={handleSubmit} action="submit" className={styles.form_geral_create_event_page} encType="multipart/form-data">
        <div className={styles.form_titulo_create_event_page}>
          <h1>Criar novo evento</h1>
        </div>
        <div className={styles.form_create_event_page}>
          <div>
            <div className={styles.container_input_create_event}>
              <label htmlFor="nome">Nome do evento</label>
              <input className={styles.input_create_event} type="text" name="nome" id="" placeholder="Festa de aniversário" onChange={(e) => setCadastroEvento({ ...cadastroEvento, nome: e.target.value })} />
            </div>
            <div className={styles.container_input_create_event}>
              <label htmlFor="imagem">
                Escolha sua imagem
              </label>
              <input type="file" name="imagem" id="" accept="image/*" placeholder="Insira a imagem do evento" onChange={(e) => setCadastroEvento({ ...cadastroEvento, imagem: e.target.files[0] })}/>
            </div>
          </div>
          <div>
            <div className={styles.container_input_create_event}>
              <label htmlFor="data">Data do evento</label>
              <input className={styles.input_create_event} type="date" name="data" id="" onChange={(e) => setCadastroEvento({ ...cadastroEvento, data: e.target.value })}/>
            </div>
            <div className={styles.container_input_create_event}>
              <label htmlFor="horario">Horario do evento</label>
              <input className={styles.input_create_event} type="time" name="horario" id="" placeholder="20:00" onChange={(e) => setCadastroEvento({ ...cadastroEvento, horario: e.target.value })} />
            </div>

          </div>
          <div>
            <div className={styles.container_input_create_event}>
              <label htmlFor="preco">Preço do evento</label>
              <input className={styles.input_create_event} type="text" name="preco" id="" placeholder="R$ 0,00" onChange={(e) => setCadastroEvento({ ...cadastroEvento, preco: e.target.value })} />
            </div>
            <div className={styles.container_input_create_event}>
              <label htmlFor="local">Local do evento</label>
              <input className={styles.input_create_event} type="text" name="local" id="" placeholder="Praça de eventos" onChange={(e) => setCadastroEvento({ ...cadastroEvento, local: e.target.value })} />
            </div>
          </div>
          <div className={styles.container_description_create_event}>
            <label htmlFor="descricao">Descrição do evento</label>
            <textarea className={styles.input_create_event} name="descricao" id="" placeholder="Open bar" onChange={(e) => setCadastroEvento({ ...cadastroEvento, descricao: e.target.value })}></textarea>
          </div>
          <div className={styles.container_buttons_create_event}>
            <button type="submit">Criar evento</button>
            <button type="submit" onClick={(e) => toggleForm(e)} >Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  )
}