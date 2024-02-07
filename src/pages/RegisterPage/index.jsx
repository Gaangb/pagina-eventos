import styles from "./styles.module.css";

export function RegisterPage() {

  return (
    <section className={styles.container_geral_register_page}>
      <div className={styles.container_register_page}>
        <form action="submit" className={styles.form_geral_register_page}>
          <div className={styles.form_titulo_register_page}>
            <h1>Cadastre-se agora!</h1>
          </div>
          <div className={styles.form_register_page}>
            <input type="text" name="" id="" placeholder="Digite seu nome"/>
            <input type="text" name="" id="" placeholder="Digite seu cpf"/>     
            <input type="email" name="" id="" placeholder="Digite seu email" />
            <input type="password" name="" id="" placeholder="Digite sua senha" />
            <button type="submit">Cadastrar</button>
            <a href="/">Já possuo uma conta</a>
          </div>
        </form>
      </div>
    </section>
  );
};