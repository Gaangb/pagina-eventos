import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

export function CreateEvent() {

  const { usuarios, eventos, setEventos, toggleForm } = useEventsBuilder();



  return (
    <div className={styles.container_create_event_page}>
      <form action="submit" className={styles.form_geral_create_event_page}>
        <div className={styles.form_titulo_create_event_page}>
          <h1>Criar novo evento</h1>
        </div>
        <div className={styles.form_create_event_page}>
          <div>
            <label htmlFor="nome">Nome do evento</label>
            <input className={styles.input_create_event} type="text" name="nome" id="" placeholder="Festa de aniversário" />
            <div>
              <label htmlFor="imagem">
                Escolha sua imagem
              </label>
              <input type="file" name="imagem" id="" accept="image/*" placeholder="Insira a imagem do evento" />
            </div>
          </div>
          <div>
            <label htmlFor="data">Data do evento</label>
            <input className={styles.input_create_event} type="date" name="data" id=""/>
            <label htmlFor="horario">Horario do evento</label>
            <input className={styles.input_create_event} type="text" name="horario" id="" placeholder="20:00" />

          </div>
          <div>
            <label htmlFor="preco">Preço do evento</label>
            <input className={styles.input_create_event} type="text" name="preco" id="" placeholder="R$ 0,00" />
            <label htmlFor="local">Local do evento</label>
            <input className={styles.input_create_event} type="text" name="local" id="" placeholder="Praça de eventos" />

          </div>
          <label htmlFor="descricao">Descrição do evento</label>
          <input className={styles.input_create_event} type="text" name="descricao" id="" placeholder="Open bar" />
          <div>
            <button type="submit">Criar evento</button>
            <button type="submit" onClick={(e) => toggleForm(e)} >Cancelar</button>
          </div>
        </div>
      </form>
    </div>
  )
}