// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRouter';
import './App.css'
import './index.css'

const App = () => {
  return (  
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
