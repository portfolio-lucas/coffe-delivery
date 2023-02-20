import { BoxCoffe } from "../../components/Coffes";
import { Header } from "../../components/Header";
import { Items } from "../../components/Items";
import { HomeContainer, IntroContainer } from "./style";
import imageIntro from '../../assets/image-intro.svg';
import TraditionalExpress from '../../assets/coffes/traditional-express.svg';
import AmericanExpress from '../../assets/coffes/american-express.svg';
import IcedExpress from '../../assets/coffes/iced-express.svg';

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
                  icon={<ShoppingCart size={22} weight="bold" color="white" />} 
                  description="Compra simples e segura" 
                />

                <Items 
                  icon={<Package size={22} weight="bold" color="white" />}
                  description="Embalagem mantém o café intacto" 
                />
              </div>

              <div className="item">
                <Items 
                  icon={<Timer size={22} weight="bold" color="white" />}
                  description="Entrega rápida e rastreada" 
                />
                <Items 
                  icon={<Coffee size={22} weight="bold" color="white" />}
                  description="O café chega fresquinho até você" 
                />
              </div>
            </div>
          </div>

            <img src={imageIntro} alt="" />
        
        </IntroContainer>

        <div className="coffes">
          <h1>Nossos cafés</h1>
          
          <div>
            <div className="grid">
              <BoxCoffe 
                icon={<img src={TraditionalExpress} alt="Expresso Tradicional" />}
                type="Tradicional"
                title="Expresso Tradicional"
                description="O tradicional café feito com água quente e grãos moídos"
                price={9.90} 
              />
              <BoxCoffe 
                icon={<img src={AmericanExpress} alt="Expresso Americano" />}
                type="Tradicional"
                title="Expresso Americano"
                description="Expresso diluído, menos intenso que o tradicional"
                price={9.90}
              />
              <BoxCoffe 
                icon={<img src={IcedExpress} alt="Expresso" />}
                type="Tradicional" 
                title="Expresso Gelado"
                description="Bebida preparada com café expresso e cubos de gelo"
                price={9.90}
              />
            </div>
          </div>
        </div>

      </HomeContainer>
  )
}