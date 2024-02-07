import styles from "./styles.module.css";

export function EventsPage() {
    return (
        <section className={styles.container_geral_events_page}>
            <div className={styles.container_navbar_events_page}>
                <input type="text" name="" id="" placeholder="Pesquise" />
                <a href=""><p>minha conta</p></a>
                <button>Sair</button>
            </div>
        </section>
    );
}