import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PayrollForm from './componenet/payroll-form/payroll-form';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App"> 
        <Router>
          <Switch>
            <Route exact path="">
              <PayrollForm />
            </Route>
          </Switch>
        </Router> 
    </div>
     
  );
}

export default App;
