import { BtnCarCoffe, CoffeContainer, TypesBox } from "./style";
import { ShoppingCart } from "phosphor-react";
import { ReactElement, useState } from "react";
import { useQuantity } from "../../Hooks/UseQuantity/useQuantity";

interface TypesProps {
  id: number;
  description: string;
}

interface CoffesProps {
  id: number;
  icon?: ReactElement;
  types?: TypesProps[];
  title?: string;
  description?: string;
  quantity?: number;
  price: number;
}

export function BoxCoffe({
  id,
  icon,
  types,
  title,
  description,
  quantity,
  price,
}: CoffesProps) {
  const [productsInTheCart, setProductsInTheCart] = useState<CoffesProps[]>([]);

  const { quantityCoffe, increaseTheQuantity, decreaseTheQuantity } =
    useQuantity();

  let priceOfCoffe = price * quantityCoffe;

  // função para adicionar o café no carrinho
  const addCoffeInCar = () => {
    const newCoffe: CoffesProps = {
      id,
      icon,
      types,
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
          {types &&
            types.length > 0 &&
            types.map((item) => {
              return (
                <TypesBox key={item.id}>
                  <h5>{item.description}</h5>
                </TypesBox>
              );
            })}
        </div>

        <h2>{title}</h2>

        <p style={{ fontFamily: "Roboto" }}>{description}</p>

        <div>
          <span>
            R$ <strong>{priceOfCoffe.toFixed(2).replace(".", ",")}</strong>
          </span>

          <div className="addQuantity">
            <button
              disabled={quantityCoffe === 1}
              onClick={decreaseTheQuantity}
            >
              -
            </button>
            <span>{quantityCoffe}</span>
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
