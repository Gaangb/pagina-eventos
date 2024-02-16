import { useState } from "react";

import styles from "./styles.module.css";

export default function QuantityInput() {
    const [quantity, setQuantity] = useState(0);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className={styles.container_geral}>
            <button onClick={decrement}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={increment}>+</button>
        </div>
    );
}
