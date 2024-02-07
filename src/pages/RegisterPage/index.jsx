import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";



export function RegisterPage() {
  const [cadastro, setCadastro] = useState({ nome: '', cpf: '', email: '', senha: '' });
  const { usuarios, setUsuarios } = useEventsBuilder();
  const handleSubmit = (event) => {

    event.preventDefault();
    const usuarioCadastrado = usuarios.find(user => user.email === cadastro.email || user.cpf === cadastro.cpf);
    if (usuarioCadastrado) {
      alert("Email ja existe");
    } else if (cadastro.email === '' || cadastro.cpf === '' || cadastro.nome === '' || cadastro.senha === '') {
      alert("Preencha todos os campos");
    } else if (cadastro.senha.length < 6) {
      alert("Senha muito curta");
    } else if (cadastro.cpf.length < 11) {
      alert("CPF inválido");
    }
    else {
      setUsuarios([...usuarios, { id: usuarios.length + 1, nome: cadastro.nome, email: cadastro.email, senha: cadastro.senha, cpf: cadastro.cpf }]);

      alert("Conta criada com sucesso");
      location.href = '/login'
      }
    setCadastro({ nome: '', cpf: '', email: '', senha: '' }) 
  }

  console.log(cadastro)

return (
  <section className={styles.container_geral_register_page}>
    <div className={styles.container_register_page}>
      <form onSubmit={handleSubmit} action="submit" className={styles.form_geral_register_page}>
        <div className={styles.form_titulo_register_page}>
          <h1>Cadastre-se agora!</h1>
        </div>
        <div className={styles.form_register_page}>
          <input type="text" name="" id="" placeholder="Digite seu nome" onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })} />
          <input type="text" name="" id="" placeholder="Digite seu cpf" onChange={(e) => setCadastro({ ...cadastro, cpf: e.target.value })} />
          <input type="email" name="" id="" placeholder="Digite seu email" onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })} />
          <input type="password" name="" id="" placeholder="Digite sua senha" onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })} />
          <button type="submit">Cadastrar</button>
          <a href="/login">Já possuo uma conta</a>
        </div>
      </form>
    </div>
  </section>
);
};