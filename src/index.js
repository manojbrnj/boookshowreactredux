import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import boookContext from './Context/bookcontext';
import { Provider } from './Context/bookcontext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
