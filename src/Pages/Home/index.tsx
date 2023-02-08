import { BoxCoffe } from "../../components/Coffes";
import { Header } from "../../components/Header";
import { Items } from "../../components/Items";
import { HomeContainer, IntroContainer } from "./style";
import imageIntro from '../../assets/image-intro.svg';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
  return (
      <HomeContainer>
        <Header />

        <IntroContainer>
          <div>
            <div className="introTitles">
              <h2>Encontre o café perfeito para qualquer hora do dia</h2>

              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>

            <div className="items">
              <div className="item">
                <Items 
                  icon={<ShoppingCart size={22} weight="bold" color="orange" />} 
                  description="Compra simples e segura" 
                />

                <Items 
                  icon={<Package size={22} weight="bold" color="#574F4D" />}
                  description="Embalagem mantém o café intacto" 
                />
              </div>

              <div className="item">
                <Items 
                  icon={<Timer size={22} weight="bold" color="#DBAC2C" />}
                  description="Entrega rápida e rastreada" 
                />
                <Items 
                  icon={<Coffee size={22} weight="bold" color="#8047F8" />}
                  description="O café chega fresquinho até você" 
                />
              </div>
            </div>
          </div>

            <img src={imageIntro} alt="" />
        
        </IntroContainer>

      
        <BoxCoffe />


      </HomeContainer>
  )
}