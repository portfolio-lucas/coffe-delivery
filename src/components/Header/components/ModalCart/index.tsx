import * as Dialog from "@radix-ui/react-dialog";
import {
  ModalContainer,
  ProgressButton,
  RemoveAllItems,
  RemoveItem,
  ShoppingListContainer,
  Text,
  Th,
  Tr,
} from "./style";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../../../../context/Products/ProductsContext";
import { XCircle } from "phosphor-react";
import { useNavigate } from "react-router-dom";

export function ModalCart() {
  const {
    chosenProducts,
    removeProductToShortlist,
    removeAllProductsToShortList,
    calcTotalValue,
  } = useContext(ProductsContext);

  const navigate = useNavigate();

  const navigateToProgress = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    calcTotalValue();
  }, [calcTotalValue]);

  return (
    <ModalContainer>
      {chosenProducts.length === 0 && (
        <p style={{ fontWeight: "bold" }}>Seu carrinho está vazio</p>
      )}

      {chosenProducts && chosenProducts.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <table>
            <thead>
              <Tr>
                <Th style={{ minWidth: "35%" }}>Nome</Th>
                <Th style={{ minWidth: "8%" }}>Qtd</Th>
                <Th style={{ minWidth: "14%" }}>Preço</Th>
                <Th />
              </Tr>
            </thead>

            <tbody>
              <ShoppingListContainer>
                {chosenProducts.map((product) => {
                  return (
                    <div key={product.id}>
                      <Tr>
                        <Text style={{ minWidth: "35%" }}>{product.title}</Text>

                        <Text style={{ minWidth: "8%", marginLeft: "0.8%" }}>
                          {product.quantity}
                        </Text>

                        <Text style={{ minWidth: "14%", marginLeft: "0.8%" }}>
                          {product.price.toFixed(2).replace(".", ",")}
                        </Text>

                        <RemoveItem
                          onClick={() => removeProductToShortlist(product)}
                        >
                          <XCircle size={20} weight="light" color="red" />
                        </RemoveItem>
                      </Tr>
                    </div>
                  );
                })}
              </ShoppingListContainer>
            </tbody>
          </table>

          {chosenProducts.length >= 2 && (
            <RemoveAllItems onClick={removeAllProductsToShortList}>
              Limpar carrinho
            </RemoveAllItems>
          )}

          <div style={{ border: "1px solid black" }} />

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <p>
                Total:{" "}
                <strong>
                  R$ {calcTotalValue().toFixed(2).replace(".", ",")}
                </strong>
              </p>

              <div style={{ marginTop: "8%" }}>
                <ProgressButton onClick={navigateToProgress}>
                  Prosseguir
                </ProgressButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </ModalContainer>
  );
}
