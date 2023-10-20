import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntegrationNotistack from "./extension/snackbar/index";
import Login from "./page/login";
import Catalog from "./page/catalog/index.d";
import Home from "./page/home/index.d";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <IntegrationNotistack />
    </Router>
  );
}

export default App;
