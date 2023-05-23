import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Header } from "../../components/Header";
import { CheckoutContainer, CompleteOrder, FormOfPayment } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validation = yup.object({
  CEP: yup.number().max(8).positive().required("Você deve digitar um número"),
  ROAD: yup.string().required("Você deve digitar o nome da sua rua"),
  NumberHome: yup.number().required("Você deve digitar o número da sua casa"),
  Complement: yup.string(),
  NEIGHBORHOOD: yup.string().required("Você deve digitar o nome do seu bairro"),
  CITY: yup.string().required("Você deve digitar o nome da sua cidade"),
  FEDERATIVE: yup.string().required("Você deve digitar a sigla do seu estado"),
}).required();
type FormData = yup.InferType<typeof validation>;

export function Checkout() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validation)
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <CheckoutContainer>
      <Header />

      <h1>Complete seu pedido</h1>

      <CompleteOrder>
        <img src="" alt="" />

        <span>Endereço de entrega</span>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="primaryBlock">
            <div>
              <input placeholder="CEP" {...register("CEP")}  className="cep" />
              <p className="errorMessage">{errors.CEP?.message}</p>
            </div>

            <div>
              <input placeholder="Rua" {...register("ROAD")} className="road" />
              <p className="errorMessage">{errors.ROAD?.message}</p>
            </div>
          </div>
          
          <div className="secondBlock">
            <div>
              <input placeholder="Número" {...register("NumberHome")} className="numberHome" />
              <p className="errorMessage">{errors.NumberHome?.message}</p>
            </div>

            <input placeholder="Complemento" {...register("Complement")} className="complement" />
          </div>

          <div className="thirdBlock">
            <div>
              <input placeholder="Bairro" {...register("NEIGHBORHOOD")} className="neighborhood" />
              <p className="errorMessage">{errors.NEIGHBORHOOD?.message}</p>
            </div>

            <div>
              <input placeholder="Cidade" {...register("CITY")} className="city" />
              <p className="errorMessage">{errors.CITY?.message}</p>
            </div>

            <div>
              <input placeholder="UF" {...register("FEDERATIVE")} maxLength={2} className="federativeUnit" />
              <p className="errorMessage">{errors.FEDERATIVE?.message}</p>
            </div>

            <input type="submit" value="Salvar" />
          </div>
        </form>
        
      </CompleteOrder>

      <FormOfPayment>

        <span style={{display: "flex"}}>          
          <CurrencyDollar size={20} color="#8047F8" />
          Pagamento
        </span>

        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <form>
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
        </form>

      </FormOfPayment>
    </CheckoutContainer>
  )
}