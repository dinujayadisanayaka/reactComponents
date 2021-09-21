import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Pchat from './pages/Pchat';



export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div className="container">
        <Route path="/" exact component={Home}></Route>
        <Route path="/form" exact component={Form}></Route>
        <Route path="/chart" exact component={Pchat}></Route>
      </div>
     </BrowserRouter>
    )
  }
}
