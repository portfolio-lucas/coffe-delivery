import { useState } from "react";

export function useQuantity() {
  const [quantityCoffe, setQuantityCoffe] = useState(1);

  // função para adicionar a quantidade
  const increaseTheQuantity = () => {
    let calc = quantityCoffe + 1;

    setQuantityCoffe(calc);
  }

  // função para diminuir a quantidade
  const decreaseTheQuantity = () => {
    let calc = quantityCoffe - 1;

    setQuantityCoffe(calc);
  }

  return {
    increaseTheQuantity,
    decreaseTheQuantity,
    quantityCoffe,
  };
}