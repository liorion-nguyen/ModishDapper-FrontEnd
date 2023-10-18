import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntegrationNotistack from './extension/snackbar/index';
import Login from './page/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <IntegrationNotistack />
    </Router>
  );
}

export default App;
