import { useCallback, useState, useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { loggedInUserJSON } from "../../utils/utils";

import styles from "./styles.module.css";

export function SideBar() {
  const [selectedButton, setSelectedButton] = useState("UserAccount");
  const { setShowComponentsUserPage, handleLogOut } = useEventsBuilder();

  const changeComponente = useCallback((e, buttonName) => {
    e.preventDefault();
    setSelectedButton(buttonName);
    setShowComponentsUserPage(buttonName);
  }, []);

  const [cadastro, setCadastro] = useState({
    nome: "",
    cpf: "",
    nome_estabelecimento: "",
    email: "",
    senha: "",
    imagem: "",
  });

  useEffect(() => {
    if (loggedInUserJSON) {
      setCadastro({
        nome: loggedInUserJSON.nome,
        cpf: loggedInUserJSON.cpf,
        nome_estabelecimento: loggedInUserJSON.nome_estabelecimento,
        email: loggedInUserJSON.email,
        senha: loggedInUserJSON.senha,
        imagem: loggedInUserJSON.imagem,
      });
    }
  }, []);

  return (
    <div className={styles.container_geral}>
      <div className={styles.container_content}>
        <img src={cadastro.imagem} alt="" />
        <button
          style={
            selectedButton === "UserAccount"
              ? { border: "1px solid white", borderRadius: "5px" }
              : {}
          }
          onClick={(e) => changeComponente(e, "UserAccount")}
        >
          Conta
        </button>
        <button
          style={
            selectedButton === "MyEvents"
              ? { border: "1px solid white", borderRadius: "5px" }
              : {}
          }
          onClick={(e) => changeComponente(e, "MyEvents")}
        >
          Meus Eventos
        </button>
        <button
          className={
            selectedButton === "Financeiro" ? styles.selectedButton : ""
          }
          onClick={(e) => changeComponente(e, "Financeiro")}
        >
          Financeiro
        </button>
        <button
          className={selectedButton === "Sair" ? styles.selectedButton : ""}
          onClick={() => { handleLogOut() }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
