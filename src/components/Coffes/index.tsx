import { CoffeContainer } from "./style";
import { ShoppingCart } from "phosphor-react";

interface ICoffe {
  icon?: HTMLOrSVGImageElement;
  type?: string;
  title?: string;
  description?: string;
  quantity?: number;
  price?: string;
}

export function BoxCoffe({icon, type, title, description, quantity, price}: ICoffe) {
  const handleIncrementQuantity = () => {
    alert('+1');
  }

  const handleDecrementQauntity = () => {
    alert('-1');
  }

  return (
    <CoffeContainer>
      <>
        {icon}

        <h5>{type}</h5>

        <h2>{title}</h2>

        <p>{description}</p>

        <div>
          <span>R$ <strong>{price}</strong></span>

            <div className="addQuantity">
              <button onClick={handleDecrementQauntity}>-</button>
                1
              <button onClick={handleIncrementQuantity}>+</button>
            </div>

            <div className="marketCar">
              <ShoppingCart size={22} weight="bold" color="#fff" />
            </div>
          
        </div>
      </>
    </CoffeContainer>
  )
}