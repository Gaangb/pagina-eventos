import { useLocation } from "react-router-dom";

import styles from "./styles.module.css";

export function PaymentPage() {
    const location = useLocation()
    const currentPayment = location.state.payment

    console.log(currentPayment)
    return (
        <div className={styles.container_geral}>
            <div className={styles.container_content}>
                <h1>Pagamento</h1>
            </div>
        </div>
    );
}