import styles from "./styles.module.css";

export function UserPage() {
    return (
        <div className={styles.container_geral}>
            <div className={styles.container_titulo}>
                <h1><ion-icon name="settings-sharp"></ion-icon>Configurações do usuário</h1>
            </div>
        </div>
    );
}