import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import IntegrationNotistack from "./extension/snackbar/index";
import Login from "./page/login";
import Catalog from "./page/catalog/index.d";
import Home from "./page/home/index.d";
import Cart from "./page/cart";
import Product from "./page/product";
import CheckOut from "./page/checkout";
import Cookies from "js-cookie";
import { decodedAT } from "./Api/user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "./redux/user";
import { getPurchase } from "./Api/purchase";
import { PurchaseActions } from "./redux/purchase";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const decoded = async () => {
      const user = await decodedAT(Cookies.get('modish') || "");
      const purchase = await getPurchase(user.user._id);
      
      if (user.error === "Invalid Access Token") {
        Cookies.remove('modish');
      }
      else {
        dispatch(UserActions.setUser(user))
        dispatch(PurchaseActions.setPurchase(purchase))
      }
    }
    decoded();
  }, [Cookies.get('modish')]);
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
