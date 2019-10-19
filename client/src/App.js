import React, { useState, useEffect } from 'react';
import { NavLink, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";
import CounterClass from "./components/counterClass";
import Counter from "./components/counter";
import FormClass from "./components/formClass";
import Form from "./components/form";
import Snippets from "./components/snippets";
import './App.css';

const App = () => {

  const [pages, setPages] = useState([]);

  useEffect(() => {
    const navArray = [

      {
        name: "Why?",
        path: "/"
      },
      {
        name: "Class Counter",
        path: "/counterclass"
      },
      {
        name: "Hooks Counter",
        path: "/counter"
      },
      {
        name: "Class Form",
        path: "/formclass"
      },
      {
        name: "Hooks Form",
        path: "/form"
      },
      {
        name: "Snippets",
        path: "/snippets"
      },
    ];
    setPages(navArray);
  }, []);



  const navPages = pages.map((page, index) => (
    <li className="nav-item" key={index}><NavLink isActive={() => window.location.pathname === page.path} to={page.path} className="nav-link lead small">{page.name}</NavLink></li>
  ));

  return (
    <Router>
      <div className="App text-center col-md-6 offset-md-3">
        <div className="jumbotron jumbotron-fluid">
          <h3 className="display-4">React H<img className="img-fluid" alt="React Logo" src="logo192.png" /><img className="img-fluid" alt="React Logo" src="logo192.png" />ks</h3>
          <p className="lead">View Official React Hooks Docs<a className="lead ml-1" href="https://reactjs.org/docs/hooks-intro.html" target="_blank" rel="noopener noreferrer">Here</a></p>
          <div className="container-fluid">
            <ul className="nav nav-tabs nav-fill">
              {navPages}
            </ul>
          </div>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/counterclass" component={CounterClass} />
          <Route exact path="/counter" component={Counter} />
          <Route exact path="/formclass" component={FormClass} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/snippets" component={Snippets} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
