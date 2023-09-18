import React, { useCallback, useContext, useEffect } from "react";
import { BoxButton, QuantityButton } from "./style";
import { useQuantity } from "../../Hooks/UseQuantity/useQuantity";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { CoffesProps } from "../Home/lists";

interface ButtonAddRemoveProps {
  coffe: CoffesProps;
  quantity: number;
}

const ButtonAddRemove: React.FC<ButtonAddRemoveProps> = ({
  coffe,
  quantity,
}) => {
  const { quantityCoffe, decreaseTheQuantity, increaseTheQuantity } =
    useQuantity({
      quantity,
    });

  const { addProductToShortlist } = useContext(ProductsContext);

  const updateProduct = useCallback(() => {
    let newPrice = 9.9 * quantityCoffe;

    const newProduct: CoffesProps = {
      ...coffe,
      quantity: quantityCoffe,
      price: newPrice,
    };

    addProductToShortlist(newProduct);
  }, [quantityCoffe]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  return (
    <BoxButton>
      <QuantityButton
        disabled={quantityCoffe === 1}
        onClick={() => {
          decreaseTheQuantity();
        }}
      >
        -
      </QuantityButton>
      <p>{quantityCoffe}</p>
      <QuantityButton
        onClick={() => {
          increaseTheQuantity();
        }}
      >
        +
      </QuantityButton>
    </BoxButton>
  );
};

export default ButtonAddRemove;
