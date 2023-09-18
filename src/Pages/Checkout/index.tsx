import { Bank, CreditCard, CurrencyDollar, Money, Trash } from "phosphor-react";
import { Header } from "../../components/Header";
import {
  CheckoutContainer,
  CoffeItem,
  CoffesList,
  CoffesSelectedContainer,
  CompleteOrder,
  ConfirmOrderButton,
  Divisor,
  FormOfPayment,
  InputForm,
  OrderSummary,
  OrderTotalItems,
  TextPrice,
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { OrderContext, OrderProps } from "../../context/Order/OrderContext";
import { useCallback, useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/Products/ProductsContext";
import Item from "./Item";
import { useNavigate } from "react-router-dom";

const validation = yup
  .object({
    name: yup.string().required("Você deve digitar seu nome"),
    email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
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
    paymentMethod: yup.string().required("Selecione uma forma de pagamento"),
  })
  .required();
type FormData = yup.InferType<typeof validation>;

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(validation),
  });
  const navigate = useNavigate();
  const [deliveryPrice, setDeliveryPrice] = useState(3.3);
  const [totalOrderPrice, setTotalOrderPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  const { order, addOrderInOrdersList } = useContext(OrderContext);

  const paymentSelected = {
    border: "1px solid #8047F8",
  };

  const onSubmit = (data: FormData) => {
    if (order) {
      const updateOrder: OrderProps = {
        ...order,
        client: {
          name: data.name,
          email: data.email,
          cep: data.CEP,
          address: data.address,
          number: data.NumberHome,
          complement: data.Complement,
          district: data.NEIGHBORHOOD,
          city: data.CITY,
          state: data.FEDERATIVE,
          paymentMethod: data.paymentMethod,
        },
      };

      addOrderInOrdersList(updateOrder);
    }
  };

  const { calcTotalValue } = useContext(ProductsContext);

  const navigateToConfirmOrder = () => {
    if (order) {
      navigate(`/order/${order.id}/success`);
    }
  };

  const calcTotalOrderPrice = useCallback(() => {
    const totalValue = calcTotalValue();
    let totalOrder: number;

    if (Number(totalValue.toFixed(2)) > 50) {
      setDeliveryPrice(0.0);
      totalOrder = totalValue;
      setTotalOrderPrice(totalOrder);
    } else {
      setDeliveryPrice(3.3);
      totalOrder = totalValue + deliveryPrice;
      setTotalOrderPrice(totalOrder);
    }
  }, [deliveryPrice, calcTotalValue]);

  useEffect(() => {
    calcTotalValue();
    calcTotalOrderPrice();
  }, [calcTotalValue, calcTotalOrderPrice]);

  return (
    <CheckoutContainer>
      <Header />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1>Complete seu pedido</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CompleteOrder>
              <img src="" alt="" />

              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>

              {/* NOME e EMAIL */}
              <div className="primaryBlock">
                <div className="block">
                  <InputForm
                    placeholder="Nome"
                    {...register("name")}
                    className="name"
                  />
                  <p className="errorMessage">{errors.name?.message}</p>
                </div>

                <div className="block">
                  <InputForm
                    placeholder="E-mail"
                    {...register("email")}
                    className="email"
                  />
                  <p className="errorMessage">{errors.email?.message}</p>
                </div>
              </div>
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
            </CompleteOrder>

            <FormOfPayment>
              <span style={{ display: "flex" }}>
                <CurrencyDollar size={20} color="#8047F8" />
                Pagamento
              </span>

              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>

              <div>
                <button
                  style={paymentMethod === "creditCard" ? paymentSelected : {}}
                  onClick={() => {
                    setValue("paymentMethod", "creditCard");
                    setPaymentMethod("creditCard");
                  }}
                >
                  <CreditCard size={22} color="#8047F8" />
                  <span>CARTÃO DE CRÉDITO</span>
                </button>

                <button
                  style={paymentMethod === "debitCard" ? paymentSelected : {}}
                  onClick={() => {
                    setValue("paymentMethod", "debitCard");
                    setPaymentMethod("debitCard");
                  }}
                >
                  <Bank size={22} color="#8047F8" />
                  <span>CARTÃO DE DÉBITO</span>
                </button>

                <button
                  style={paymentMethod === "money" ? paymentSelected : {}}
                  onClick={() => {
                    setValue("paymentMethod", "money");
                    setPaymentMethod("money");
                  }}
                >
                  <Money size={22} color="#8047F8" weight="thin" />
                  <span>DINHEIRO</span>
                </button>
              </div>
            </FormOfPayment>

            <div
              style={{
                marginLeft: "3rem",
                width: "640px",
                backgroundColor: "#F3F2F2",
                marginTop: "-2%",
                marginBottom: "10px",
              }}
            >
              <div style={{ paddingBlock: "1rem", marginLeft: "2.5rem" }}>
                <InputForm
                  type="submit"
                  value="Salvar"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </form>
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
                <span style={{ width: "150px" }}>Total de itens</span>
                <span>R$ {calcTotalValue().toFixed(2).replace(".", ",")}</span>
              </OrderTotalItems>

              <OrderTotalItems>
                <span style={{ width: "150px" }}>Entrega</span>
                <span style={deliveryPrice === 0 ? { color: "#030" } : {}}>
                  {deliveryPrice === 0
                    ? "Entrega grátis"
                    : `R$ ${deliveryPrice.toFixed(2).replace(".", ",")}`}
                </span>
              </OrderTotalItems>

              <OrderTotalItems>
                <h1 style={{ width: "150px" }}>Total</h1>
                <TextPrice>
                  R$ {totalOrderPrice.toFixed(2).replace(".", ",")}
                </TextPrice>
              </OrderTotalItems>

              <ConfirmOrderButton onClick={navigateToConfirmOrder}>
                CONFIRMAR PEDIDO
              </ConfirmOrderButton>
            </OrderSummary>
          </CoffesSelectedContainer>
        </div>
      </div>
    </CheckoutContainer>
  );
}
