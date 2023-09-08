import React, { useContext } from "react";

import { BoxCoffe } from "../../components/Coffes";
import { Header } from "../../components/Header";
import { Items } from "../../components/Items";
import { HomeContainer, IntroContainer } from "./style";
import imageIntro from "../../assets/image-intro.svg";

import { guarantees } from "../Home/lists";
import { ProductsContext } from "../../context/Products/ProductsContext";

export default function Home() {
  const { products } = useContext(ProductsContext);

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
                  <div key={item.id} className="item">
                    <Items icon={item.icon} description={item.content} />
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
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <BoxCoffe
                    id={product.id}
                    icon={product.icon}
                    types={product.types}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </HomeContainer>
  );
}
