import {
  HeaderContainer,
  ContentMain,
  CarButton,
  QuantityInCart,
  Location,
} from "./style";
import CoffeDelivery from "../../assets/coffe-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalCart } from "./components/ModalCart";
import { useContext, useState } from "react";
import { OrderContext } from "../../context/Order/OrderContext";

export function Header() {
  const { order } = useContext(OrderContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <HeaderContainer>
      <img src={CoffeDelivery} alt="Logo café delivery" />

      <ContentMain>
        <Location>
          <MapPin size={22} weight="bold" color="#8047F8" />
          <span>João Pessoa-PB</span>
        </Location>

        <Dialog.Root
          modal
          open={openModal}
          onOpenChange={() => {
            if (order) {
              setOpenModal(!openModal);
            }
          }}
        >
          <Dialog.Trigger asChild>
            <CarButton>
              <ShoppingCart size={22} color="orange" />
              {order && (
                <QuantityInCart>
                  <p>{order.chosenProducts.length}</p>
                </QuantityInCart>
              )}
            </CarButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content>
              <ModalCart />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </ContentMain>
    </HeaderContainer>
  );
}
