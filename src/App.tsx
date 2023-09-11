import { OrderProvider } from "./context/Order/OrderContext";
import { ProductsProvider } from "./context/Products/ProductsContext";
import "./index.css";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <ProductsProvider>
        <OrderProvider>
          <Router />
        </OrderProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}
