import React, { useContext } from "react";

import { Header } from "../../components/Header";
import { Items } from "../../components/Items";
import { ButtonOrder, DoOrderContainer, IntroContainer } from "./style";
import imageIntro from "../../assets/image-intro.svg";

import { guarantees } from "../Home/lists";
import { ArrowBendDownRight } from "phosphor-react";
import { OrderContext } from "../../context/Order/OrderContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { generateOrderId, setOrder } = useContext(OrderContext);

  const navigate = useNavigate();

  const goToNewOrder = () => {
    const newOrderId = generateOrderId();

    setOrder({
      id: newOrderId,
      chosenProducts: [],
    });
    navigate(`/order/${newOrderId}/new`);
  };

  return (
    <div>
      <Header />

      <IntroContainer>
        <div>
          <div className="introTitles">
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>

            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <div className="items">
            {guarantees &&
              guarantees.map((item) => {
                return (
                  <div key={item.id} className="item">
                    <Items icon={item.icon} description={item.content} />
                  </div>
                );
              })}
          </div>
        </div>

        <img src={imageIntro} alt="" />
      </IntroContainer>

      <DoOrderContainer>
        <ButtonOrder onClick={goToNewOrder}>
          <span>Faça seu pedido agora</span>
          <ArrowBendDownRight size={24} weight="light" color="white" />
        </ButtonOrder>
      </DoOrderContainer>
    </div>
  );
}
