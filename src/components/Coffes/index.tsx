import { BtnCarCoffe, CoffeContainer } from "./style";
import { ShoppingCart } from "phosphor-react";
import { ReactElement, useState } from "react";
import { useQuantity } from "../../Hooks/UseQuantity/useQuantity";

interface ICoffe {
  icon?: ReactElement;
  type?: string[];
  title?: string;
  description?: string;
  quantity?: number;
  price: number;
}

export function BoxCoffe({
  icon,
  type,
  title,
  description,
  quantity,
  price,
}: ICoffe) {
  const [productsInTheCart, setProductsInTheCart] = useState<ICoffe[]>([]);

  const { quantityCoffe, increaseTheQuantity, decreaseTheQuantity } =
    useQuantity();

  let priceOfCoffe = price * quantityCoffe;

  // função para adicionar o café no carrinho
  const addCoffeInCar = () => {
    const newCoffe: ICoffe = {
      icon,
      type,
      title,
      description,
      quantity,
      price,
    };

    setProductsInTheCart([...productsInTheCart, newCoffe]);
  };

  return (
    <CoffeContainer>
      <>
        {icon}

        <div style={{ display: "flex" }}>
          {type &&
            type.length > 0 &&
            type.map((item) => {
              return <h5>{item}</h5>;
            })}
        </div>

        <h2>{title}</h2>

        <p>{description}</p>

        <div>
          <span>
            R$ <strong>{priceOfCoffe.toFixed(2)}</strong>
          </span>

          <div className="addQuantity">
            <button
              disabled={quantityCoffe === 1}
              onClick={decreaseTheQuantity}
            >
              -
            </button>
            {quantityCoffe}
            <button onClick={increaseTheQuantity}>+</button>
          </div>

          <div className="marketCar">
            <BtnCarCoffe onClick={addCoffeInCar}>
              <ShoppingCart size={22} weight="bold" color="#fff" />
            </BtnCarCoffe>
          </div>
        </div>
      </>
    </CoffeContainer>
  );
}
