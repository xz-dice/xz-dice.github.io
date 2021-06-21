import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Route} from "react-router-dom";
import './index.css';
import NavigationBar from "./sections/NavigationBar"

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Route>
      <NavigationBar/>
      </Route>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
