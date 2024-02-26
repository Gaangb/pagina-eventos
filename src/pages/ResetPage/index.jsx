import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

import styles from "./styles.module.css";

export function ResetPage() {
  const { usuarios, setUsuarios, showLogo, setCustomClassNavBar } = useEventsBuilder();
  const [credenciais, setCredenciais] = useState({ email: "", cpf: "" , senha: ""});
  const [isRight, setIsRight] = useState(false);

  useEffect(() => {
    setCustomClassNavBar("no_show_navbar");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const usuarioValido = usuarios.find(
      (user) => user.cpf === credenciais.cpf && user.email === credenciais.email
    );
    setIsRight(usuarioValido);
    console.log("submit", usuarioValido);
    if (!usuarioValido) {
      toast.error("Credenciais inválidas");
    }
  };

  const handleSavePassword = (event) => {
    event.preventDefault();
    
    const usuarioValidoIndex = usuarios.findIndex(
      (user) => user.cpf === credenciais.cpf && user.email === credenciais.email
    );
  
    if (usuarioValidoIndex !== -1) {
      // Encontrou um usuário válido
      const updatedUsuarios = [...usuarios];
      updatedUsuarios[usuarioValidoIndex] = {
        ...usuarios[usuarioValidoIndex],
        senha: credenciais.senha
      };
      setUsuarios(updatedUsuarios);
      localStorage.setItem("usuarios", JSON.stringify(updatedUsuarios));
      setCredenciais({ email: "", cpf: "", senha: "" });
      toast.success("Senha alterada com sucesso!");
      setTimeout(() => {
        location.href = "/login";
      }, 2000)

    } else {
      // adicionar toast de erro
    }
  };

  return (
    <section className={styles.container_geral_register_page}>
      <div className={styles.container_register_page}>
        {showLogo}
        <form
          onSubmit={isRight ? handleSavePassword : handleSubmit}
          action="submit"
          className={styles.form_geral_register_page}
        >
          <div className={styles.form_titulo_register_page}>
            {!isRight ? (
              <h1>Confirme sua identidade</h1>
            ) : (
              <h1>Alterar senha</h1>
            )}
          </div>
          <div className={styles.form_register_page}>
            {!isRight ? (
              <>
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Digite o cpf vinculado à conta"
                  onChange={(e) =>
                    setCredenciais({ ...credenciais, cpf: e.target.value })
                  }
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Digite o email vinculado à conta"
                  onChange={(e) =>
                    setCredenciais({ ...credenciais, email: e.target.value })
                  }
                />
              </>
            ) : (
              <input
                type="password"
                name="password"
                id=""
                placeholder="Digite a nova senha"
               
                onChange={(e) => setCredenciais({ ...credenciais, senha: e.target.value })}
              />
            )}

            <button type="submit">Confirmar</button>
            <a href="/login">Cancelar</a>
          </div>
        </form>
      </div>
    </section>
  );
}
