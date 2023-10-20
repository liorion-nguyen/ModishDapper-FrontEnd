import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntegrationNotistack from './extension/snackbar/index';
import Login from './page/login';
import Home from './page/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <IntegrationNotistack />
    </Router>
  );
}

export default App;
