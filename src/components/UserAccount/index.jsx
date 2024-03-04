import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";
import { useEffect } from "react";
import { loggedInUserJSON } from "../../utils/utils";

import styles from "./styles.module.css";
import SettingsIcon from "@mui/icons-material/Settings";
import { toast } from "react-toastify";
import AlertDialogModal from "../AlertDialogModal";

export function UserAccount() {
  const { usuarios, setUsuarios, deleteUser } = useEventsBuilder();
  const [modalOpen, setModalOpen] = useState(false);
  const [usuarioToDeleteId, setUsuarioToDeleteId] = useState(null);
  const [cadastro, setCadastro] = useState({
    nome: "",
    cpf: "",
    nome_estabelecimento: "",
    email: "",
    senha: "",
    imagem: "",
  });

  const onConfirmButtonClick = (e) => {
    e.preventDefault();

    if (loggedInUserJSON.senha === cadastro.senha) {
      const updateUsuario = usuarios.map((user) =>
        user.id === cadastro.id ? cadastro : user
      );

      setUsuarios(updateUsuario);
      localStorage.setItem("loggedInUser", JSON.stringify(cadastro));
      localStorage.setItem("usuarios", JSON.stringify(updateUsuario));

      toast.success("Conta atualizada com sucesso");
      setCadastro(updateUsuario.find((user) => user.id === cadastro.id));
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return;
    } else {
      toast.error("Senha Incorreta");
    }
  };

  const onDeleteAccount = (id) => {
    setModalOpen(!modalOpen);
    setUsuarioToDeleteId(id);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCadastro({ ...cadastro, imagem: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const deleteAccount = () => {
    deleteUser(usuarioToDeleteId);
    toast.success("Conta deletada com sucesso");
  };

  const handleImageDelete = (e) => {
    e.preventDefault();
    setCadastro({
      ...cadastro,
      imagem: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    });
  };

  useEffect(() => {
    if (loggedInUserJSON) {
      setCadastro({
        id: loggedInUserJSON.id,
        nome: loggedInUserJSON.nome,
        cpf: loggedInUserJSON.cpf,
        nome_estabelecimento: loggedInUserJSON.nome_estabelecimento,
        email: loggedInUserJSON.email,
        senha: cadastro.senha,
        imagem: loggedInUserJSON.imagem,
      });
    }
  }, []);

  return (
    <div className={styles.container_content}>
      <div className={styles.container_form}>
        <form
          action="submit"
          onSubmit={onConfirmButtonClick}
          className={styles.form_geral}
        >
          <div className={styles.container_titulo}>
            <h1>
              <SettingsIcon />
              Configurações do usuário
            </h1>
          </div>
          <div className={styles.flex_row_img}>
            <img src={cadastro.imagem} alt="" />
            <input
              type="file"
              id="uploadImage"
              name="uploadImage"
              style={{ display: "none" }}
              onChange={handleImageUpload}
            />
            <label htmlFor="uploadImage">Upload imagem</label>
            <input
              type="button"
              id="delete"
              name="delete"
              style={{ display: "none" }}
              onClick={handleImageDelete}
            />
            <label htmlFor="delete">Remover imagem</label>
          </div>

          <div className={styles.flex_row}>
            <div className={styles.flex_column}>
              <label>Nome</label>
              <input
                value={cadastro.nome}
                type="text"
                name=""
                id=""
                placeholder="Digite seu nome"
                onChange={(e) =>
                  setCadastro({ ...cadastro, nome: e.target.value })
                }
              />
            </div>
            <div className={styles.flex_column}>
              <label>Email</label>
              <input
                value={cadastro.email}
                type="email"
                name=""
                id=""
                placeholder="Digite seu email"
                onChange={(e) =>
                  setCadastro({ ...cadastro, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className={styles.flex_row}>
            <div className={styles.flex_column}>
              <label>Nome do estabelecimento</label>
              <input
                value={cadastro.nome_estabelecimento}
                type="text"
                name=""
                id=""
                placeholder="Nome do estabelecimento"
                onChange={(e) =>
                  setCadastro({
                    ...cadastro,
                    nome_estabelecimento: e.target.value,
                  })
                }
              />
            </div>
            <div className={styles.flex_column}>
              <label>CPF/CNPJ</label>
              <input
                value={cadastro.cpf}
                type="text"
                name=""
                id=""
                placeholder="Digite seu cpf/cnpj"
                readonly
                className={styles.input_readonly}
              />
            </div>
          </div>
          <div className={styles.flex_row}>
            <div className={styles.flex_column}>
              <label>Senha</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="Digite sua senha"
                onChange={(e) =>
                  setCadastro({ ...cadastro, senha: e.target.value })
                }
              />
            </div>
            <div className={styles.button_confirm}>
              <button
                type="button"
                onClick={() => onDeleteAccount(cadastro.id)}
              >
                Excluir conta
              </button>
              <button type="submit">Salvar</button>
            </div>
          </div>
        </form>
      </div>
      {modalOpen && (
        <AlertDialogModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          handleDelete={deleteAccount}
          handleClose={() => setModalOpen(false)}
          title="Excluir conta"
          text="Tem certeza que deseja excluir sua conta? A ação apagará todos os eventos vinculados à conta e não poderá ser desfeita."
        />
      )}
    </div>
  );
}
