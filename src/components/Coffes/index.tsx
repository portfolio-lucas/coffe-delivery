import { CoffeContainer } from "./style";
import CoffeForBox from '../../assets/coffebox.svg'
import { ReactElement } from "react";

interface ICoffe {
  icon?: ReactElement;
  type?: string;
  title?: string;
  description?: string;
  quantity?: number;
  price?: string;
}

export function BoxCoffe({icon, type, title, description, quantity, price}: ICoffe) {
  return (
    <CoffeContainer>
      <img src={CoffeForBox} alt="" />

      <h5>TRADICIONAL</h5>

      <h2>Expresso Tradicional</h2>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div>
        <span>R$ <strong>9,90</strong></span>

        <div className="addQuantity">
          <button>-</button>
            1
          <button>+</button>
        </div>
      </div>
    </CoffeContainer>
  )
}