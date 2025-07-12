import './App.css';
import ScrollToTop from './views/ScrollToTop';
import { BrowserRouter as Router } from 'react-router-dom';

import MainRoutes from './routes';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainRoutes />
    </Router>
  );
}

export default App;
