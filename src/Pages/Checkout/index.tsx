import { Bank, CreditCard, CurrencyDollar, Money, Trash } from "phosphor-react";
import { Header } from "../../components/Header";
import {
  CheckoutContainer,
  CoffeItem,
  CoffesList,
  CoffesSelectedContainer,
  CompleteOrder,
  Divisor,
  FormOfPayment,
  InputForm,
  OrderSummary,
  OrderTotalItems,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { OrderContext } from "../../context/Order/OrderContext";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/Products/ProductsContext";
import Item from "./Item";

const validation = yup
  .object({
    CEP: yup
      .string()
      .min(8, "O número deve ter no mínimo 8 caracteres")
      .max(8, "O número deve ter no máixmo 8 caracteres")
      .required("Você deve digitar um número"),
    address: yup.string().required("Você deve digitar o nome da sua rua"),
    NumberHome: yup
      .string()
      .required("Você deve digitar o número da sua casa")
      .min(1, "VocÊ deve digitar no mínimo 1 caractere"),
    Complement: yup.string(),
    NEIGHBORHOOD: yup
      .string()
      .required("Você deve digitar o nome do seu bairro"),
    CITY: yup.string().required("Você deve digitar o nome da sua cidade"),
    FEDERATIVE: yup.string().required("Sigla do seu estado"),
  })
  .required();
type FormData = yup.InferType<typeof validation>;

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validation),
  });
  const onSubmit = (data: FormData) => console.log(data);

  const { order } = useContext(OrderContext);

  const { calcTotalValue } = useContext(ProductsContext);

  useEffect(() => {
    calcTotalValue();
  }, [calcTotalValue]);

  return (
    <CheckoutContainer>
      <Header />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1>Complete seu pedido</h1>

          <CompleteOrder>
            <img src="" alt="" />

            <span>Endereço de entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* CEP e RUA */}
              <div className="primaryBlock">
                <div className="block">
                  <InputForm
                    type="text"
                    placeholder="CEP"
                    {...register("CEP")}
                    className="cep"
                  />
                  <p className="errorMessage">{errors.CEP?.message}</p>
                </div>

                <div className="block">
                  <InputForm
                    placeholder="Rua"
                    {...register("address")}
                    className="address"
                  />
                  <p className="errorMessage">{errors.address?.message}</p>
                </div>
              </div>

              {/* NÚMERO e COMPLEMENTO */}
              <div className="secondBlock">
                <div className="block">
                  <InputForm
                    placeholder="Número"
                    {...register("NumberHome")}
                    className="numberHome"
                  />
                  <p className="errorMessage">{errors.NumberHome?.message}</p>
                </div>

                <div className="block">
                  <InputForm
                    placeholder="Complemento"
                    {...register("Complement")}
                    className="complement"
                  />
                </div>
              </div>

              {/* BAIRRO e CIDADE e UF */}
              <div className="thirdBlock">
                <div className="block">
                  <InputForm
                    placeholder="Bairro"
                    {...register("NEIGHBORHOOD")}
                    className="neighborhood"
                  />
                  <p className="errorMessage">{errors.NEIGHBORHOOD?.message}</p>
                </div>

                <div className="block">
                  <InputForm
                    placeholder="Cidade"
                    {...register("CITY")}
                    className="city"
                  />
                  <p className="errorMessage">{errors.CITY?.message}</p>
                </div>

                <div className="block">
                  <InputForm
                    placeholder="UF"
                    {...register("FEDERATIVE")}
                    maxLength={2}
                    className="federativeUnit"
                  />
                  <p className="errorMessage">{errors.FEDERATIVE?.message}</p>
                </div>
              </div>

              <InputForm type="submit" value="Salvar" />
            </form>
          </CompleteOrder>

          <FormOfPayment>
            <span style={{ display: "flex" }}>
              <CurrencyDollar size={20} color="#8047F8" />
              Pagamento
            </span>

            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>

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
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1>Cafés selecionados</h1>

          <CoffesSelectedContainer>
            <CoffesList>
              {order &&
                order.chosenProducts.map((product) => (
                  <>
                    <CoffeItem key={product.id}>
                      <Item product={product} />
                    </CoffeItem>
                    <Divisor />
                  </>
                ))}
            </CoffesList>

            <OrderSummary>
              <OrderTotalItems>
                <span>Total de itens</span>
                <span>R$ {calcTotalValue().toFixed(2).replace(".", ",")}</span>
              </OrderTotalItems>
            </OrderSummary>
          </CoffesSelectedContainer>
        </div>
      </div>
    </CheckoutContainer>
  );
}
