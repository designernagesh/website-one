import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Header from './components/Header'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>    
      <div className="App">
        <div className="container">
          <Header />
          <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/AboutUs" component={ AboutUs } />
            <Route path="/Products" component={ Products } />
            <Route path="/ContactUs" component={ ContactUs } />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;