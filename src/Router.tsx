import { Route, Routes } from "react-router-dom";
import { Checkout } from "./Pages/Checkout";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import OrderSuccess from "./Pages/OrderSuccess";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/order/:id/new" element={<Orders />}></Route>

      <Route path="/checkout/:id/finished" element={<Checkout />}></Route>
      <Route path="/order/:id/success" element={<OrderSuccess />}></Route>
    </Routes>
  );
}
