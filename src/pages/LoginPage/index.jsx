import { useState } from "react";
import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useEffect } from "react";

export function LoginPage() {
  const [login, setLogin] = useState({email: '', senha: ''})
  const { usuarios, setIsLogged, showLogo, setCustomClassNavBar } = useEventsBuilder();
  
  useEffect(() => {
    setCustomClassNavBar("no_show_navbar");
  }, []);

  const handleSubmit = (event) => {
  
    event.preventDefault();
    const usuarioValido = usuarios.find(user => user.email === login.email && user.senha === login.senha);

    if (usuarioValido) {
      setIsLogged(true)
      localStorage.setItem("loggedInUser", JSON.stringify(usuarioValido));
      location.href = '/'
      
    } else {
      alert("Credenciais inválidas");
    }
    setLogin({email: '', senha: ''})
  };

  return (
    <section className={styles.container_geral_login_page}>
      <div className={styles.container_login_page}>
      {showLogo}
        <form onSubmit={handleSubmit} action="submit" className={styles.form_geral_login_page}>
          <div className={styles.form_titulo_login_page}>
            <h1>Bem vindo de volta!</h1>
          </div>
          <div className={styles.form_login_page}>
            <input value={login.email} type="email" name="email" id="" placeholder="Digite seu email" onChange={(e) => setLogin({...login, email: e.target.value})}/>
            <input value={login.senha} type="password" name="senha" id="" placeholder="Digite sua senha" onChange={(e) => setLogin({... login, senha: e.target.value})}/>
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
}