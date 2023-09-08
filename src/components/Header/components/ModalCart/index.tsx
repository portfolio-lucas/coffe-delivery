import * as Dialog from "@radix-ui/react-dialog";
import { ModalContainer, ShoppingListContainer } from "./style";
import { useContext } from "react";
import { ProductsContext } from "../../../../context/Products/ProductsContext";

export function ModalCart() {
  const { chosenProducts } = useContext(ProductsContext);

  return (
    <ModalContainer>
      {chosenProducts.length === 0 && (
        <p style={{ fontWeight: "bold" }}>Seu carrinho está vazio</p>
      )}

      {chosenProducts &&
        chosenProducts.map((product) => {
          return (
            <ShoppingListContainer key={product.id}>
              <div>
                <p style={{ fontWeight: "bold" }}>Nome:</p>
                <p>{product.title}</p>
              </div>

              <div>
                <p style={{ fontWeight: "bold" }}>Quantidade:</p>
                <p>{product.quantity}</p>
              </div>

              <div>
                <p style={{ fontWeight: "bold" }}>Preço</p>
                <p>{product.price.toFixed(2).replace(".", ",")}</p>
              </div>
            </ShoppingListContainer>
          );
        })}
    </ModalContainer>
  );
}
