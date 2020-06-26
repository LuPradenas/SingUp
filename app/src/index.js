import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from './components/pages/Home/home';
import Register from './components/pages/Register/register';
import SingUp from  './components/pages/LogIn/logIn';



const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/Register' component={Register}/>
      <Route exact path='/SingUp' component={SingUp}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));