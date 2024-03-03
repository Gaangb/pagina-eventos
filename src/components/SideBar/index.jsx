import { useCallback, useState, useEffect } from "react";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { loggedInUserJSON } from "../../utils/utils";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import logo from "../../assets/logo.png";

import styles from "./styles.module.css";

export function SideBar({ isMobile, onClick }) {
  const { setShowComponentsUserPage, handleLogOut } = useEventsBuilder();
  const [selectedButton, setSelectedButton] = useState("UserAccount");
  const [sidebarOpen, setSidebarOpen] = useState(true);
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
    <div className={styles.container_geral} >
      <div>
        <img src={logo} alt="logo" onClick={() => (location.href = "/")} />
        {isMobile && (
          <button onClick={onClick}><ClearOutlinedIcon /></button>
        )}
      </div>
      <div className={styles.container_content}>
        <img src={cadastro.imagem} alt="" />
        <button
          style={
            selectedButton === "UserAccount"
              ? {
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                  fontWeight: "bold",
                }
              : {}
          }
          onClick={(e) => changeComponente(e, "UserAccount")}
        >
          Conta
        </button>
        <button
          style={
            selectedButton === "MyEvents"
              ? {
                  borderTop: "1px solid white",
                  borderBottom: "1px solid white",
                  fontWeight: "bold",
                }
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
          onClick={() => {
            handleLogOut();
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
