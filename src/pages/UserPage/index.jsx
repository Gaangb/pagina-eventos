import { SideBar } from "../../components/Side_Bar";
import styles from "./styles.module.css";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import { useState } from "react";
import { useEffect } from "react";



export function UserPage() {
    const { usuarios, setUsuarios } = useEventsBuilder();

    const [cadastro, setCadastro] = useState({
        nome: '',
        cpf: '',
        nome_estabelecimento: '',
        email: '',
        senha: '',
    });

    useEffect(() => {
        const loggedInUserJSON = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUserJSON) {
            setCadastro({
                nome: loggedInUserJSON.nome,
                cpf: loggedInUserJSON.cpf,
                nome_estabelecimento: loggedInUserJSON.nome_estabelecimento,
                email: loggedInUserJSON.email,
                senha: loggedInUserJSON.senha,
            });
        }
    }, []);


    return (
        <div className={styles.container_geral}>
            < SideBar />
            <div className={styles.container_content}>

                <div className={styles.container_form}>
                    <form action="submit" className={styles.form_geral}>
                        <div className={styles.container_titulo}>
                            <h1><ion-icon name="settings-sharp"></ion-icon>Configurações do usuário</h1>
                        </div>
                        <div className={styles.flex_row_img}>
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                            <input type="file" id="myFile" name="filename" style={{ display: 'none' }} />
                            <label htmlFor="myFile">upload imagem</label>
                            <input type="file" id="myFile" name="filename" style={{ display: 'none' }} />
                            <label htmlFor="myFile" >Remover imagem</label>
                        </div>

                        <div className={styles.flex_row}>
                            <div className={styles.flex_column}>
                                <label>Nome</label>
                                <input value={cadastro.nome} type="text" name="" id="" placeholder="Digite seu nome" onChange={(e) => setCadastro({ ...cadastro, nome: e.target.value })} />
                            </div>
                            <div className={styles.flex_column}>
                                <label>Email</label>
                                <input value={cadastro.email} type="email" name="" id="" placeholder="Digite seu email" onChange={(e) => setCadastro({ ...cadastro, email: e.target.value })} />
                            </div>
                        </div>
                        <div className={styles.flex_row}>
                            <div className={styles.flex_column}>
                                <label>Nome do estabelecimento</label>
                                <input value={cadastro.nome_estabelecimento} type="text" name="" id="" placeholder="Nome do estabelecimento" onChange={(e) => setCadastro({ ...cadastro, nome_estabelecimento: e.target.value })} />
                            </div>
                            <div className={styles.flex_column}>
                                <label>CPF/CNPJ</label>
                                <input value={cadastro.cpf} type="text" name="" id="" placeholder="Digite seu cpf/cnpj" onChange={(e) => setCadastro({ ...cadastro, cpf: e.target.value })} />
                            </div>
                        </div>
                        <div className={styles.flex_row}>
                            <div className={styles.flex_column}>
                                <label>Senha</label>
                                <input value={""} type="password" name="" id="" placeholder="Digite sua senha" onChange={(e) => setCadastro({ ...cadastro, senha: e.target.value })} />
                            </div>
                            <div className={styles.button_Confirm}>
                                <button type="submit">Confirmar Mudanças</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}