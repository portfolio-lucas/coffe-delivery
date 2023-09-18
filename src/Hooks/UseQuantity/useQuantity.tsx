import { useState } from "react";

interface QuantityProps {
  quantity: number;
}

export function useQuantity({ quantity }: QuantityProps) {
  const [quantityCoffe, setQuantityCoffe] = useState(quantity);

  // função para adicionar a quantidade
  const increaseTheQuantity = () => {
    let calc = quantityCoffe + 1;

    setQuantityCoffe(calc);
  };

  // função para diminuir a quantidade
  const decreaseTheQuantity = () => {
    let calc = quantityCoffe - 1;

    setQuantityCoffe(calc);
  };

  return {
    increaseTheQuantity,
    decreaseTheQuantity,
    quantityCoffe,
  };
}

import React from "react";
