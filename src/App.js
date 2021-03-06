import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Pchat from './pages/Pchat';
import bgraph from './pages/bgraph';
import {blue} from "@mui/material/colors";
import Validate from "./components/form/Validate";



export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div className="container" >
        <Route path="/" exact component={Home}></Route>
        <Route path="/form" exact component={Form}></Route>
        <Route path="/pchart" exact component={Pchat}></Route>
        <Route path="/bgraph" exact component={bgraph}></Route>
        <Route path="/valid" exact component={Validate}></Route>
      </div>
     </BrowserRouter>
    )
  }
}
