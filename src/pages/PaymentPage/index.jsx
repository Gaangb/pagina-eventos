import { useLocation } from "react-router-dom";
import QRCode from "qrcode.react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function PaymentPage() {
  const location = useLocation();
  const purshaseDetails = location.state.purshaseDetails;
  const [timeLeft, setTimeLeft] = useState(330); // 5 minutos e 30 segundos em segundos
  const [meuIngresso, setMeuIngresso] = useState({
    evento: purshaseDetails.evento,
    Nome: "",
    Cpf: "",
    Email: "",
  });

  useEffect(() => {
    const myTimeout = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(myTimeout);
          window.location.href = "/";
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(myTimeout);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const [codigoPagamento, setCodigoPagamento] = useState(
    "jxllksdf1334jfkal1231l4fjd"
  );

  return (
    <div className={styles.container_geral}>
      <div className={styles.container_content}>
        <div>
          <h1>Quase lá</h1>
        </div>
        <div className={styles.content_details}>
          <div>
            <h3>Preencha os campos abaixo e efetue o pagamento</h3>
            <form action="" className={styles.form_geral}>
              <div className={styles.form_top}>
                <div>
                  <label htmlFor="">Nome Completo</label>
                  <input type="text" />
                </div>
                <div>
                  <label htmlFor="">CPF</label>
                  <input type="text" />
                </div>
              </div>
              <div className={styles.form_bottom}>
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
            </form>
          </div>
          <div className={styles.content_payment}>
            <div className={styles.content_payment_details}>
              <div>
                <h3>Resumo do pagamento</h3>
              </div>
              <div className={styles.content_payment_top}>
                <div>
                  <p>Pista: {purshaseDetails.quantityPista}</p>
                </div>
                <div>
                  <p>Camarote: {purshaseDetails.quantityCamarote}</p>
                </div>
              </div>
              <div className={styles.content_payment_bottom}>
                <p>Total </p>
                <p>R${purshaseDetails.payment},00</p>
                <button type="submit">Efetuar pagamento</button>
              </div>
            </div>
            <div className={styles.payment_timer}>
              <div>
                <p>
                  <AccessTimeIcon /> {formattedTime}
                </p>
              </div>
              <div>
                <p>
                  Após este tempo, os ingressos serão liberados para venda
                  novamente
                </p>
              </div>
            </div>
          </div>
        </div>
        {
          <div className={styles.container_content_qrcode}>
            <div>
              <h2>Utilize o QR Code abaixo para efetuar o pagamento</h2>
            </div>
            <div className={styles.content_qrcode}>
              <div>
                <QRCode value={codigoPagamento} />
                <div>
                  <p>Como pagar?</p>
                  <ul>
                    <li>Copie o QR Code</li>
                    <li>Abra o aplicativo de pagamento</li>
                    <li>Selecione a opção pagar com QR Code</li>
                    <li>Confirme as informações e finalize a compra</li>
                  </ul>
                </div>
              </div>
              <div>
                <span>Ou copie o código abaixo</span>
                <input
                  type="text"
                  value={codigoPagamento}
                  readOnly
                  className={styles.paymentCodeInput}
                />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
