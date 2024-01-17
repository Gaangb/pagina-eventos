import styles from "./styles.module.css"
export function LoginPage() {
  return (
    <section className={styles.container_geral_login_page}>
      <div className={styles.container_login_page}>
        <form action="submit" className={styles.form_geral_login_page}>
          <div className={styles.form_titulo_login_page}>
            <h1>Pagina de login</h1>
          </div>
          <div className={styles.form_login_page}>
            <input type="email" name="" id="" placeholder="Digite seu email"/>
            <input type="password" name="" id="" placeholder="Digite sua senha"/>
            <div>
              <button type="submit">Acessar Conta</button>
              <a href="">Esqueci minha senha</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}