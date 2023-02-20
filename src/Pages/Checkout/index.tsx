import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Header } from "../../components/Header";
import { CheckoutContainer, CompleteOrder, FormOfPayment } from "./style";

export function Checkout() {
  return (
    <CheckoutContainer>
      <Header />

      <h1>Complete seu pedido</h1>

      <CompleteOrder>
        <img src="" alt="" />

        <span>Endereço de entrega</span>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <div className="primaryBlock">
          <input type="number" placeholder="CEP" maxLength={8} className="cep" />
          <input type="text" placeholder="Rua" className="road" />
        </div>
        
        <div className="secondBlock">
          <input type="number" placeholder="Número" className="numberHome" />
          <input type="text" placeholder="Complemento" className="complement" />
        </div>

        <div className="thirdBlock">
          <input type="text" placeholder="Bairro" className="neighborhood" />
          <input type="text" placeholder="Cidade" className="city" />
          <input type="text" placeholder="UF" maxLength={2} className="federativeUnit" />
        </div>
        
      </CompleteOrder>

      <FormOfPayment>

        <span style={{display: "flex"}}>          
          <CurrencyDollar size={20} color="#8047F8" />
          Pagamento
        </span>

        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <div>
          <button>
            <CreditCard size={22} color="#8047F8" />
            <span>CARTÃO DE CRÉDITO</span>
          </button>

          <button>
            <Bank size={22} color="#8047F8" />
            <span>CARTÃO DE DÉBITO</span>
          </button>

          <button>
            <Money size={22} color="#8047F8" weight="thin" />
            <span>DINHEIRO</span>
          </button>
        </div>

      </FormOfPayment>
    </CheckoutContainer>
  )
}