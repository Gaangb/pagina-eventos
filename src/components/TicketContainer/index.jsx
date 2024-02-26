/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.css";
import QuantityInput from "../QuantityInput";
import { useEventsBuilder } from "../../hooks/useEventsBuilder";
export function PaymentContainer({ preco_pista, preco_camarote, evento }) {
  const { eventos } = useEventsBuilder();
  const navigate = useNavigate();
  const [purshaseDetails, setPurshaseDetails] = useState({
    event_id: evento.id,
    quantityPista: 0,
    quantityCamarote: 0,
    payment: 0,
    evento: evento.nome,
    total_pista: evento.ingressos_pista,
    total_camarote: evento.ingressos_camarote,
  });

  const handleQuantityChangePista = (newQuantity) => {
    setPurshaseDetails({
      ...purshaseDetails,
      quantityPista: newQuantity,
    });
  };

  const handleQuantityChangeCamarote = (newQuantity) => {
    setPurshaseDetails({
      ...purshaseDetails,
      quantityCamarote: newQuantity,
    });
  };

  const handleBuyTickets = () => {
    if (
      evento.ingressos_camarote < purshaseDetails.quantityCamarote || evento.ingressos_pista < purshaseDetails.quantityPista
    ){
      alert("Quantidade indisponível")
    }else{
      navigate("/pagamento", { state: { purshaseDetails } });
      
    }
  };

  useEffect(() => {
    const total =
      purshaseDetails.quantityPista * preco_pista +
      purshaseDetails.quantityCamarote * preco_camarote;
    setPurshaseDetails({
      ...purshaseDetails,
      payment: total,
    });

  }, [purshaseDetails.quantityPista, purshaseDetails.quantityCamarote]);

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
        {purshaseDetails.quantityCamarote || purshaseDetails.quantityPista ? (
          <div>
            <div className={styles.content_promo}>
              <input type="text" placeholder="Código promocional"></input>
            </div>
            <div className={styles.content_total}>
              <div>
                <p>Total </p>
                <p>R$ {purshaseDetails.payment},00</p>
              </div>
              <button onClick={handleBuyTickets}>Comprar</button>
            </div>
          </div>
        ) : (
          <div className={styles.content_total_disabled}>
            <button disabled>Selecione um ingresso</button>
          </div>
        )}
      </div>
    </div>
  );
}
