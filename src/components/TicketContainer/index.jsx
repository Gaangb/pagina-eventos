/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import QuantityInput from "../QuantityInput";

export function PaymentContainer({ preco_pista, preco_camarote }) {
  const [payment, setPayment] = useState(0);
  const [quantityPista, setQuantityPista] = useState(0);
  const [quantityCamarote, setQuantityCamarote] = useState(0);
  const navigate = useNavigate();

  const handleQuantityChangePista = (newQuantity) => {
    setQuantityPista(newQuantity);
  };

  const handleQuantityChangeCamarote = (newQuantity) => {
    setQuantityCamarote(newQuantity);
  };

  const handleBuyTickets = () => {
    navigate("/pagamento", { state: { payment } });
  };

  useEffect(() => {
    const total =
    quantityPista * preco_pista + quantityCamarote * preco_camarote;
    setPayment(total);
  },[quantityPista, quantityCamarote]);

  return (
    <div className={styles.container_geral}>
      <div className={styles.content_title}>
        <h3>Ingressos</h3>
      </div>
      <div className={styles.container_content_geral}>
        <div className={styles.content_prices}>
          <div>
            <p className={styles.content_prices_title}>Pista </p>
            <p>R${preco_pista},00</p>
          </div>
          <QuantityInput onQuantityChange={handleQuantityChangePista} />
        </div>
        <div className={styles.content_prices}>
          <div>
            <p className={styles.content_prices_title}>Camarote </p>
            <p>R${preco_camarote},00</p>
          </div>
          <QuantityInput onQuantityChange={handleQuantityChangeCamarote} />
        </div>
        {quantityCamarote || quantityPista ? (
          <div>
            <div className={styles.content_promo}>
              <input type="text" placeholder="Código promocional"></input>
            </div>
            <div className={styles.content_total}>
              <div>
                <p>Total </p>
                <p>R$ {payment},00</p>
              </div>
              <button onClick={handleBuyTickets}>Comprar ingressos</button>
            </div>
          </div>
        ) : (
          <div className={styles.content_total_disabled}>
            <button disabled>Selecione pelo menos um ingresso</button>
          </div>
        )}
      </div>
    </div>
  );
}
