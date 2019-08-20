import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Payment from './Payment';
import UserDashboard from './containers/UserDashBoard/UserDashboard';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import CreateTrust from './containers/CreateTrust/CreateTrust';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/payment" component={Payment} />
          <Route path="/dashboard" component={UserDashboard} />
          <Route path="/create-trust" component={CreateTrust} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
