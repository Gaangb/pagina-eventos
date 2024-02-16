import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState, useEffect } from "react";

export default function CardEvent({criador, nome, local, data, horario, imagem, descricao}) {

  const { usuarios, eventos } = useEventsBuilder();
  const [cadastro, setCadastro] = useState({
    id: 0,
    nome: '',
    cpf: '',
    nome_estabelecimento: '',
    email: '',
    senha: '',
  })

  useEffect(() => {
    const loggedInUserJSON = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUserJSON) {
        setCadastro({
            id: loggedInUserJSON.id,
            nome: loggedInUserJSON.nome,
            cpf: loggedInUserJSON.cpf,
            nome_estabelecimento: loggedInUserJSON.nome_estabelecimento,
            email: loggedInUserJSON.email,
            senha: loggedInUserJSON.senha,
            imagem: loggedInUserJSON.imagem
        });
    }
}, []);
  const RenderEditButton = () => {
    console.log(cadastro.id)
    if(cadastro.id === criador) {
      return (
        <>
          <button>Editar</button>
        </>
      )
    }
  }

  return (
    <div className={styles.container_geral_events_page}>
      <div className={styles.container_imagem_titulo_events_page}>
        <div className={styles.container_titulo_events_page}>
          <h1>{nome}</h1>
          <p>Local: {local}</p>
          <p>Data: {data}</p>
          <p className={styles.hide_on_phone}>Horario: {horario}</p>
        </div>
        <img
          src={imagem}
          alt=""
        />
      </div>
      <div>
      <p className={styles.hide_on_phone}>
        <b >Descrição:</b>{descricao}
      </p>
      </div>
      {RenderEditButton()}
    </div>
  );
}
