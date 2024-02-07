import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export function ResetPage() {
    const [credenciais, setCredenciais] = useState({ email: '', cpf: '' })
    const [isRight, setIsRight] = useState(false)

    let usuarios = [{
        'email': 'administrador@gmail.com',
        'cpf': '12345678900',
    }]

    const handleSubmit = (event) => {

        event.preventDefault();
        const usuarioValido = usuarios.find(user => user.cpf === credenciais.cpf && user.email === credenciais.email);
        setIsRight(usuarioValido)
        setCredenciais({ email: '', cpf: '' })
        console.log(usuarioValido)
        if (!usuarioValido) {
            alert("Credenciais inválidas");
        }
    }

    // useEffect(() => {
    //     if (!isRight) {
    //       alert("Credenciais inválidas");
    //     }
    //   }, [handleSubmit]);

    const handleSavePassword = (event) => {
        event.preventDefault();
        console.log('Credenciais inválidas');
    }

    return (
        <section className={styles.container_geral_register_page}>
            <div className={styles.container_register_page}>
                <form onSubmit={isRight ? handleSavePassword : handleSubmit} action="submit" className={styles.form_geral_register_page}>
                    <div className={styles.form_titulo_register_page}>
                        {
                        !isRight ? (
                            <h1>Confirme sua identidade</h1>
                        )
                        : (
                            <h1>Alterar senha</h1>
                        )
                        }
                    </div>
                    <div className={styles.form_register_page}>
                        {
                            !isRight ? (
                                <>
                                    <input type="text" name="text" id="" placeholder="Digite o cpf vinculado à conta" onChange={(e) => setCredenciais({ ...credenciais, cpf: e.target.value })} />
                                    <input type="email" name="email" id="" placeholder="Digite o email vinculado à conta" onChange={(e) => setCredenciais({ ...credenciais, email: e.target.value })} />
                                </>
                            ) : (
                                <input type="password" name="password" id="" placeholder="Digite a nova senha" value="" />

                            )

                        }

                        <button type="submit">Confirmar</button>
                        <a href="/">Cancelar</a>
                    </div>
                </form>
            </div>
        </section>
    );
};