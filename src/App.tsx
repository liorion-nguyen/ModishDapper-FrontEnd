import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntegrationNotistack from "./extension/snackbar/index";
import Login from "./page/login";
import Catalog from "./page/catalog";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <IntegrationNotistack />
    </Router>
  );
}

export default App;
