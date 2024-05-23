import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { UserProvider } from './hooks/useContext';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </UserProvider>
  );
}
