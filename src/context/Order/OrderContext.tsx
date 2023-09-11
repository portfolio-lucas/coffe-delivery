import { createContext, useState } from "react";

export interface OrderContextProviderProps {
  children: React.ReactNode;
}

export interface OrderContextProps {
  orderIds: number[];
  generateOrderId: () => number;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderProvider({ children }: OrderContextProviderProps) {
  const [orderIds, setOrderIds] = useState<number[]>([]);

  const checkIdInList = (orderId: number) => {
    const checkId = orderIds.find((id) => id === orderId);

    if (checkId) {
      orderId = orderId + 1;
    } else {
      orderId = orderId;
    }

    return orderId;
  };

  const generateOrderId = () => {
    let orderId = Math.floor(Math.random());

    if (orderId <= 0) {
      orderId = 1;
    }

    orderId = checkIdInList(orderId);

    setOrderIds([...orderIds, orderId]);
    return orderId;
  };

  return (
    <OrderContext.Provider value={{ orderIds, generateOrderId }}>
      {children}
    </OrderContext.Provider>
  );
}
