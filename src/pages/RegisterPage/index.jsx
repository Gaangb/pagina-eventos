import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";
import { useEffect } from "react";


export function RegisterPage() {
  const [cadastro, setCadastro] = useState({ nome: '', cpf: '', email: '', senha: '' });
  const { usuarios, setUsuarios, showLogo, setCustomClassNavBar } = useEventsBuilder();

  useEffect(() => {
    setCustomClassNavBar("no_show_navbar");
  }, []);
  const handleSubmit = (event) => {

    event.preventDefault();
    const usuarioCadastrado = usuarios.find(user => user.email === cadastro.email || user.cpf === cadastro.cpf);
    if (usuarioCadastrado) {
      alert("Email ja existe");
    } else if (cadastro.email === '' || cadastro.cpf === '' || cadastro.nome === '' || cadastro.senha === '' || cadastro.nome_estabelecimento === '') {
      alert("Preencha todos os campos");
    } else if (cadastro.senha.length < 6) {
      alert("Senha muito curta");
    } else if (cadastro.cpf.length < 11) {
      alert("CPF/CNPJ inválido");
    }
    else {
      setUsuarios([...usuarios, { id: usuarios.length + 1, nome: cadastro.nome, email: cadastro.email, senha: cadastro.senha, cpf: cadastro.cpf, nome_estabelecimento: '' }]);

      alert("Conta criada com sucesso");
      location.href = '/login'
      }
    setCadastro({ nome: '', cpf: '', email: '', senha: '', nome_estabelecimento: '' }) 
  }

  console.log(cadastro)

return (
  <section className={styles.container_geral_register_page}>
    <div className={styles.container_register_page}>
      {showLogo}
      <form onSubmit={handleSubmit} action="submit" className={styles.form_geral_register_page}>
        <div className={styles.form_titulo_register_page}>
          <h1>Cadastre-se agora!</h1>
        </div>
        <div className={styles.form_register_page}>
          <input type="text" name="" id="" placeholder="Digite seu nome" onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })} />
          <input type="text" name="" id="" placeholder="Digite seu cpf/cnpj" onChange={(e) => setCadastro({ ...cadastro, cpf: e.target.value })} />
          <input type="text" name="" id="" placeholder="Nome do estabelecimento" onChange={(e) => setCadastro({ ...cadastro, nome_estabelecimento: e.target.value })} />
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