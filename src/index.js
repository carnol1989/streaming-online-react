import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/styles.css';
import App from "./App";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/js/src/collapse.js";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);