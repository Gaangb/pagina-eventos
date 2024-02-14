import styles from "./styles.module.css";
import photo from "../../assets/background-login.jpg";
import { useCallback, useState, useEffect } from "react";

export function SideBar() {
    const [colorButton, setColorButton] = useState('');
    const [customClass, setCustomClass] = useState('button_1');

    const changeColorButton = useCallback((button) => {
        setColorButton(button);
      }, []);
      
      useEffect(() => {
        const newCustomClass = colorButton === "button_1" ? styles.button_1 : colorButton === "button_2" ? styles.button_2 : colorButton === "button_3" ? styles.button_3 : styles.button_1;
        setCustomClass(newCustomClass);
      }, [colorButton]);


    return (
        <div className={styles.container_geral}>
        <div className={styles.container_content}>
          <img src={photo} alt="" />
          <button onClick={() => changeColorButton("button_1")} className={customClass}>Conta</button>
          <button onClick={() => changeColorButton("button_2")}>Meus Eventos</button>
          <button onClick={() => changeColorButton("button_3")}>Financeiro</button>
          <button>Sair</button>
        </div>
      </div>
    );
}