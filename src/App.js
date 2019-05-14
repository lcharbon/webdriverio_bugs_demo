import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';
import { resq$, waitToLoadReact } from "resq";

import Home from './views/home/Home';
import Success from './views/success/Success';

waitToLoadReact(2000);
window.resq$ = resq$;


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/success" exact component={Success} />
          <Redirect to="/home"/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
