import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from './routes';
import ScrollToTop from './views/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainRoutes />
    </Router>
  );
}

export default App;
