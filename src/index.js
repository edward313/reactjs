import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router}  from "react-router-dom"
import './index.css';

// import '../src/assets/js/vendor/jquery-1.12.0.min.js'
// global css

import '../src/assets/css/animate.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/font-awesome.min.css'
import '../src/assets/css/jquery-ui.min.css'
import '../src/assets/css/meanmenu.min.css'
import '../src/assets/css/owl.carousel.css'
import '../src/assets/css/responsive.css'
import '../src/assets/css/slick.css'
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import store from './store';

// import 'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  </Provider>
  
);

reportWebVitals(console.log);