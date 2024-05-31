// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes/AppRouter';
import './App.css'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (  
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  );
};

export default App;
