import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from '../src/componenet/home/home'
import PayrollForm from './componenet/payroll-form/payroll-form';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/payroll-form">
          <PayrollForm />
        </Route>
        <Route exact path="/payroll-form/:id">
          <PayrollForm />
        </Route>
        <Route exact path="">
          <Redirect exact from="/" to="/home" />
        </Route>
      </Switch>
    </Router>
  </div>
  
  );
}

export default App;
