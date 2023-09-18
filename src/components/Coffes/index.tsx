import {
  BtnCarCoffe,
  CoffeContainer,
  DecrementButton,
  IncrementButton,
  TypesBox,
} from "./style";
import { ShoppingCart } from "phosphor-react";
import { ReactElement, useContext } from "react";
import { useQuantity } from "../../Hooks/UseQuantity/useQuantity";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { OrderContext } from "../../context/Order/OrderContext";
import { CoffesProps } from "../../Pages/Home/lists";

interface TypesProps {
  id: number;
  description: string;
}

interface BoxCoffeProps {
  coffe: CoffesProps;
  quantity: number;
}

export function BoxCoffe({ coffe, quantity }: BoxCoffeProps) {
  const { quantityCoffe, increaseTheQuantity, decreaseTheQuantity } =
    useQuantity({
      quantity,
    });

  let newPrice = coffe.price * quantityCoffe;

  const { order } = useContext(OrderContext);
  const { addProductToShortlist } = useContext(ProductsContext);

  return (
    <CoffeContainer>
      <>
        {coffe.icon}

        <div style={{ display: "flex" }}>
          {coffe.types &&
            coffe.types.length > 0 &&
            coffe.types.map((item) => {
              return (
                <TypesBox key={item.id}>
                  <h5>{item.description}</h5>
                </TypesBox>
              );
            })}
        </div>

        <h2>{coffe.title}</h2>

        <p style={{ fontFamily: "Roboto" }}>{coffe.description}</p>

        <div>
          <div className="priceCoffe">
            <span>R$</span>
            <span className="price">
              <strong>{newPrice.toFixed(2).replace(".", ",")}</strong>
            </span>
          </div>

          <div className="addQuantity">
            <DecrementButton
              disabled={quantityCoffe === 1}
              onClick={() => decreaseTheQuantity()}
            >
              -
            </DecrementButton>
            <span>{quantityCoffe}</span>
            <IncrementButton onClick={() => increaseTheQuantity()}>
              +
            </IncrementButton>
          </div>

          <div className="marketCar">
            <BtnCarCoffe
              onClick={() =>
                addProductToShortlist({
                  ...coffe,
                  quantity: quantityCoffe,
                  price: newPrice,
                })
              }
            >
              <ShoppingCart size={22} weight="bold" color="#fff" />
            </BtnCarCoffe>
          </div>
        </div>
      </>
    </CoffeContainer>
  );
}
