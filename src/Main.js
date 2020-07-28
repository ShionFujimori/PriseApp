import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Members from "./Members";
import Campaigns from "./Campaigns";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>PRISE Profile</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/AboutUs">About Us</NavLink></li>
                    <li><NavLink to="/Members">Members</NavLink></li>
                    <li><NavLink to="/Campaigns">Campaigns</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/AboutUs" component={AboutUs}/>
                    <Route path="/Members" component={Members}/>
                    <Route path="/Campaigns" component={Campaigns}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;