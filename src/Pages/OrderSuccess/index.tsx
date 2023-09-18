import React, { useContext } from "react";
import { Header } from "../../components/Header";
import { OrderContext } from "../../context/Order/OrderContext";
import {
  OrderConfirmInform,
  OrderDetails,
  OrderInformation,
  OrderMessage,
  OrderSuccessContent,
} from "./style";
import { Alarm, CurrencyDollar, MapPin } from "phosphor-react";

import iconMotoDelivery from "../../assets/icon-moto.svg";

const OrderSuccess: React.FC = () => {
  const { order } = useContext(OrderContext);

  return (
    <>
      <Header />

      <OrderSuccessContent>
        <OrderConfirmInform>
          <OrderMessage>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
          </OrderMessage>

          <OrderInformation>
            <OrderDetails>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 8,
                  borderRadius: "99px",
                  backgroundColor: "#8047F8",
                }}
              >
                <MapPin size={24} weight="bold" color="white" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#574f4d",
                }}
              >
                <span>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </OrderDetails>

            <OrderDetails>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 8,
                  borderRadius: "99px",
                  backgroundColor: "#DBAC2C",
                }}
              >
                <Alarm size={24} weight="bold" color="white" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#574f4d",
                }}
              >
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </OrderDetails>

            <OrderDetails>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: 8,
                  borderRadius: "99px",
                  backgroundColor: "#C47F17",
                }}
              >
                <CurrencyDollar size={24} weight="bold" color="white" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "#574f4d",
                }}
              >
                <span>Pagamento na entrega</span>
                <strong>Cartão de crédito</strong>
              </div>
            </OrderDetails>
          </OrderInformation>
        </OrderConfirmInform>

        <OrderConfirmInform>
          <img src={iconMotoDelivery} alt="" />
        </OrderConfirmInform>
      </OrderSuccessContent>
    </>
  );
};

export default OrderSuccess;
