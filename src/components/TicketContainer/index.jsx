/* eslint-disable react/prop-types */
import { useState } from "react";

import styles from "./styles.module.css";
import QuantityInput from "../QuantityInput";

export function PaymentContainer({ local, preco_pista, preco_camarote }) {
  const [payment, setPayment] = useState(0);
  const [quantityPista, setQuantityPista] = useState(0);
  const [quantityCamarote, setQuantityCamarote] = useState(0);

  const handleQuantityChangePista = (newQuantity) => {
    setQuantityPista(newQuantity);
  };

  const handleQuantityChangeCamarote = (newQuantity) => {
    setQuantityCamarote(newQuantity);
  };

  const handleBuyTickets = () => {
    const total =
      quantityPista * preco_pista + quantityCamarote * preco_camarote;
    setPayment(total);
  };

  return (
    <div className={styles.content_bottom_prices}>
      <p>Local do evento: {local}</p>
      <div>
        <p>Preço pista: R$ {preco_pista},00</p>
        <QuantityInput onQuantityChange={handleQuantityChangePista} />
      </div>
      <div>
        <p>Preço camarote: R$ {preco_camarote},00</p>
        <div>
          <QuantityInput onQuantityChange={handleQuantityChangeCamarote} />
        </div>
      </div>
      {quantityCamarote || quantityPista ? (
        <div>
          <p>Total: R$ {payment},00</p>
          <button onClick={handleBuyTickets}>Comprar ingressos</button>
        </div>
      ) : (
        <div>
          <p>Selecione pelo menos um ingresso</p>
        </div>
      )}
    </div>
  );
}
