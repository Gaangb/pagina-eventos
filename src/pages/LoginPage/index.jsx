import { useState } from "react";
import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";

export function LoginPage() {
  const [login, setLogin] = useState({email: '', senha: ''})

  const { usuarios } = useEventsBuilder();
  
  const handleSubmit = (event) => {
  
    event.preventDefault();
    const usuarioValido = usuarios.find(user => user.email === login.email && user.senha === login.senha);

    if (usuarioValido) {
      console.log('credenciais corretas')
    } else {
      console.log('Credenciais inválidas');
    }
  };

  console.log(login)
  return (
    <section className={styles.container_geral_login_page}>
      <div className={styles.container_login_page}>
        <form onSubmit={handleSubmit} action="submit" className={styles.form_geral_login_page}>
          <div className={styles.form_titulo_login_page}>
            <h1>Bem vindo de volta!</h1>
          </div>
          <div className={styles.form_login_page}>
            <input type="email" name="email" id="" placeholder="Digite seu email" onChange={(e) => setLogin({...login, email: e.target.value})}/>
            <input type="password" name="senha" id="" placeholder="Digite sua senha" onChange={(e) => setLogin({... login, senha: e.target.value})}/>
            <div>
              <button type="submit">Acessar Conta</button>
              <a href="/reset">Esqueci minha senha</a>
            </div>
            <div>
              <p>Nao possui uma conta? <a href="/register">cadastre-se</a></p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};