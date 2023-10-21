import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntegrationNotistack from "./extension/snackbar/index";
import Login from "./page/login";
import Catalog from "./page/catalog/index.d";
import Home from "./page/home/index.d";
import Cart from "./page/cart";
import Product from "./page/product";
import CheckOut from "./page/checkout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/checkout" element={<CheckOut />} />
      </Routes>
      <IntegrationNotistack />
    </Router>
  );
}

export default App;
