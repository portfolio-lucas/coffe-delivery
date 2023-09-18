import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { CoffesProps } from "../../Pages/Home/lists";
import { ProductsContext } from "../Products/ProductsContext";

export interface OrderContextProviderProps {
  children: React.ReactNode;
}

export interface ClientProps {
  name: string;
  email: string;
  cep: string;
  state: string;
  city: string;
  address: string;
  district: string;
  complement?: string;
  number: string;
  paymentMethod: string;
}

export interface OrderProps {
  id: number;
  client?: ClientProps;
  chosenProducts: CoffesProps[];
}

export interface OrderContextProps {
  orders: OrderProps[];
  order: OrderProps | null;
  setOrder: (order: OrderProps) => void;
  orderIds: number[];
  generateOrderId: () => number;
  addOrderInOrdersList: (order: OrderProps) => void;
  updateOrderInOdersList: (order: OrderProps) => void;
  handleUpdateOrder: (order: OrderProps) => void;
}

export const OrderContext = createContext({} as OrderContextProps);

export function OrderProvider({ children }: OrderContextProviderProps) {
  const { chosenProducts } = useContext(ProductsContext);
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const [order, setOrder] = useState<OrderProps | null>(null);
  const [orderIds, setOrderIds] = useState<number[]>([]);

  const generateOrderId = () => {
    let orderId = Math.floor(Math.random());

    if (orderId <= 0) {
      orderId = 1;
    }

    const verifyId = orderIds.find((item) => item === orderId);

    if (verifyId) {
      orderId = orderId + 1;
    } else {
      orderId = orderId;
    }

    setOrderIds([...orderIds, orderId]);
    return orderId;
  };

  const updateOrderInOdersList = (order: OrderProps) => {
    orders.find((item) => {
      const updateOrder = item.id === order.id;

      if (updateOrder) {
        item.client = order.client;
        item.chosenProducts = chosenProducts;
      }

      setOrder(item);
      setOrders([...orders]);
    });
  };

  const addOrderInOrdersList = (order: OrderProps) => {
    const verifyOrderInOrdersList = orders.find((item) => item.id === order.id);

    if (verifyOrderInOrdersList) {
      updateOrderInOdersList(order);
    }

    setOrders([...orders, order]);
  };

  const handleUpdateOrder = useCallback(() => {
    if (order) {
      const updateOrder: OrderProps = {
        id: order.id,
        client: order.client,
        chosenProducts: chosenProducts,
      };
      setOrder(updateOrder);
    }
  }, [chosenProducts]);

  useEffect(() => {
    handleUpdateOrder();
  }, [handleUpdateOrder]);

  return (
    <OrderContext.Provider
      value={{
        orders,
        order,
        setOrder,
        orderIds,
        generateOrderId,
        addOrderInOrdersList,
        updateOrderInOdersList,
        handleUpdateOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
