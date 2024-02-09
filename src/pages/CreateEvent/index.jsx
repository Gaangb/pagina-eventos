import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

export function CreateEvent() {

  const { usuarios, eventos, setEventos } = useEventsBuilder();

  return (
    <div>
      <h1>Criar Evento</h1>
    </div>
  )
}