import styles from "./styles.module.css";
import { ToastContainer, toast } from 'react-toastify';
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import logo from "../../assets/logo.png"
import { CreateEvent } from "../CreateEvent";


export function NavBar() {
    const { toggleForm, isLogged, handleLogOut, showForm, customClassNavBar } = useEventsBuilder();

    const handleCreateEvent = (e) => {
        toggleForm(e)
    }

    const buttons = isLogged ? (
        <>
            <button className={styles.button_navbar_events_page} onClick={(e) => { handleCreateEvent(e) }}>Criar evento</button>
            <button className={styles.button_navbar_events_page} onClick={() => { location.href = '/minha-conta' }}>Minha conta</button>
            <button className={styles.button_sair_navbar_events_page} onClick={() => { handleLogOut() }}>Sair</button>
        </>
    ) : (
        <>
            <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/register'}>Criar conta</button>
            <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/login'}>Login</button>
        </>
    );
    console.log(customClassNavBar)

    return (
        <>
        <ToastContainer />

            <div className={styles[customClassNavBar]}>
                <img src={logo} alt="Logo" onClick={() => location.href = "/"} />
                <input type="text" name="" id="" placeholder="Pesquise" />
                {buttons}

            </div>
            <div className={`${styles.container_events_page} ${showForm ? styles.modal_open : ""}`}>
                {showForm && <CreateEvent />}
            </div>
        </>
    )
}