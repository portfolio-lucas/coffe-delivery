import React from "react";

import { BoxCoffe } from "../../components/Coffes";
import { Header } from "../../components/Header";
import { Items } from "../../components/Items";
import { HomeContainer, IntroContainer } from "./style";
import imageIntro from "../../assets/image-intro.svg";

import { guarantees, coffes } from "../Home/lists";

export default function Home() {
  return (
    <HomeContainer>
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
                  <div className="item">
                    <Items
                      key={item.id}
                      icon={item.icon}
                      description={item.content}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <img src={imageIntro} alt="" />
      </IntroContainer>

      <div className="coffes">
        <h1>Nossos cafés</h1>

        <div className="grid">
          {coffes &&
            coffes.map((item) => {
              return (
                <BoxCoffe
                  key={item.id}
                  icon={item.icon}
                  type={item.type}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              );
            })}
        </div>
      </div>
    </HomeContainer>
  );
}
