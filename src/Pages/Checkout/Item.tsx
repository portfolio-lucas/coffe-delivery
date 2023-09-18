import React, { useContext, useEffect } from "react";
import { CoffesProps } from "../Home/lists";
import ButtonAddRemove from "./ButtonAddRemove";
import { BoxButton, RemoveButton } from "./style";
import { Trash } from "phosphor-react";
import { ProductsContext } from "../../context/Products/ProductsContext";

interface ItemProps {
  product: CoffesProps;
}

const Item: React.FC<ItemProps> = ({ product }) => {
  const { removeProductToShortlist } = useContext(ProductsContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8rem",
        }}
      >
        <p style={{ width: "155px" }}>{product.title}</p>
        <span>R$ {product.price.toFixed(2)}</span>
      </div>

      <div style={{ display: "flex", gap: "1rem" }}>
        <ButtonAddRemove coffe={product} quantity={product.quantity} />

        <BoxButton>
          <RemoveButton onClick={() => removeProductToShortlist(product)}>
            <Trash size={20} weight="bold" color="#8047F8" />
          </RemoveButton>
        </BoxButton>
      </div>
    </div>
  );
};

export default Item;
