import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from "react-router-dom";
import './index.css';
import NavigationBar from "./sections/NavigationBar"
import Body from "./sections/Body";
import About from "./sections/About/About"
import Headline from "./sections/Headline/Headline";
import Portfolio from "./sections/Portfolio/Portfolio";

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <NavigationBar/>
          <Body/>
          <Headline/>
          <About/>
          {/*<Portfolio/>*/}
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
