import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./Pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/" element={<Header />} />
      </Route>
    </Routes>
  )
}