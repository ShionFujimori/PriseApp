import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import ProfileHome from "./ProfileSubPage/ProfileHome";
import AboutUs from "./ProfileSubPage/AboutUs";
import Members from "./ProfileSubPage/Members";
import Campaigns from "./ProfileSubPage/Campaigns";
import Header from "../../components/Header/Header";

const ProfilePage = (props) => {
  return (
    <HashRouter>
      <Header />
          <div>
            <h1>PRISE Profile</h1>
            <ul className="header">
              <li>
                <NavLink exact to="/ProfileHome">
                  Main
                </NavLink>
              </li>
              <li>
                <NavLink to="/AboutUs">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/Members">Members</NavLink>
              </li>
              <li>
                <NavLink to="/Campaigns">Campaigns</NavLink>
              </li>
            </ul>
            <div className="content">
              <Route exact path="/ProfileHome" component={ProfileHome} />
              <Route path="/AboutUs" component={AboutUs} />
              <Route path="/Members" component={Members} />
              <Route path="/Campaigns" component={Campaigns} />
            </div>
          </div>
    </HashRouter>
  );
};

export default ProfilePage;
