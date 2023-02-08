import { HeaderContainer, ContentMain } from "./style"
import CoffeDelivery from '../../assets/coffe-delivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header() {
  return (
      <HeaderContainer>
        <img src={CoffeDelivery} alt="Logo café delivery" />

        <ContentMain>
          <div>
            <MapPin size={22} weight="bold" color="#8047F8" />
            <span>João Pessoa-PB</span>
          </div>

          <div className="cartMarket">
            <ShoppingCart size={22}  color="orange" />
          </div>
        </ContentMain>
      </HeaderContainer>
  )
}