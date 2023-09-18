import React, { useContext } from "react";
import { ProductsContext } from "../../context/Products/ProductsContext";
import { BoxCoffe } from "../../components/Coffes";
import { OrdersContainer } from "./style";
import { Header } from "../../components/Header";

const Orders: React.FC = () => {
  const { products } = useContext(ProductsContext);

  return (
    <OrdersContainer>
      <Header />

      <div className="coffes">
        <h1>Nossos cafés</h1>

        <div className="grid">
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <BoxCoffe coffe={product} quantity={product.quantity} />
                </div>
              );
            })}
        </div>
      </div>
    </OrdersContainer>
  );
};

export default Orders;
