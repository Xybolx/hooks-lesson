import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
