import styles from "./styles.module.css";
import { ToastContainer, toast } from 'react-toastify';
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
import logo from "../../assets/logo.png"
import { CreateEvent } from "../CreateEvent";


export function NavBar() {
    const { toggleForm, isLogged, handleLogOut, showForm, customClassNavBar, showNavbar } = useEventsBuilder();

    const handleCreateEvent = (e) => {
        toggleForm(e)
    }

    function renderButtons() {
        if (isLogged && showNavbar) {
            return (
                <>
                    <input type="text" name="" id="" placeholder="Pesquise" />
                    <button className={styles.button_navbar_events_page} onClick={(e) => { handleCreateEvent(e) }}>Criar evento</button>
                    <button className={styles.button_navbar_events_page} onClick={() => { location.href = '/minha-conta' }}>Minha conta</button>
                    <button className={styles.button_sair_navbar_events_page} onClick={() => { handleLogOut() }}>Sair</button>
                </>
            )
        } else if(!isLogged && showNavbar) {
            return (
                <>
                    <input type="text" name="" id="" placeholder="Pesquise" />
                    <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/register'}>Criar conta</button>
                    <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/login'}>Login</button>
                </>
            )
        } else {
            return null
        }
     }
    // const buttons = isLogged && showNavbar ?(
    //     <>
    //         <button className={styles.button_navbar_events_page} onClick={(e) => { handleCreateEvent(e) }}>Criar evento</button>
    //         <button className={styles.button_navbar_events_page} onClick={() => { location.href = '/minha-conta' }}>Minha conta</button>
    //         <button className={styles.button_sair_navbar_events_page} onClick={() => { handleLogOut() }}>Sair</button>
    //     </>
    // ) : (
    //     <>
    //         <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/register'}>Criar conta</button>
    //         <button className={styles.button_login_navbar_events_page} onClick={() => location.href = '/login'}>Login</button>
    //     </>
    // );


    return (
        <>
        <ToastContainer />

            <div className={styles[customClassNavBar]}>
                <img src={logo} alt="Logo" onClick={() => location.href = "/"} />
                {renderButtons()}

            </div>
            <div className={`${styles.container_events_page} ${showForm ? styles.modal_open : ""}`}>
                {showForm && <CreateEvent />}
            </div>
        </>
    )
}