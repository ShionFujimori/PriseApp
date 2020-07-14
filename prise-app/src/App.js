import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import homePage from "./pages/homePage";
import userPage from "./pages/userPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact component={homePage}/>
          <Route path="/user" exact component={userPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
