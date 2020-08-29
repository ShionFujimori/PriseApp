import React, { useState, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.scss";
import UserPage from "./pages/UserPage/UserPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProfileHome from "./pages/ProfilePage/ProfileSubPage/ProfileHome/ProfileHome";

const THEME = createMuiTheme({
  typography: {
    h1: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      fontSize: 63,
    },
    h5: {
      fontFamily: "Open Sans",
      fontSize: 29,
    },
    h6: {
      fontFamily: "Open Sans",
      fontWeight: "SemiBold",
      fontSize: 29,
    },
  },
});

const App = () => {
  const [state, setState] = useState({ posts: [] });
  // useEffect(() => {
  //   fetch("http://localhost:4000/posts")
  //     .then((response) => response.json())
  //     .then((posts) => setState({ posts: posts }));
  // }, [state]);
  //
  // or
  //
  // useEffect(() => {
  //   axios.get("http://localhost:4000/posts")
  //     .then(res => {setState({posts: res.data})});
  // }, [state]);

  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/profile">
            <UserPage pageType="PROFILE" message="Hello, John Smith">
              <ProfileHome
                organization="KPMG"
                address="www.home.com    Toronto, Ontario  CANADA"
              />
            </UserPage>
          </Route>
          <Route path="/dashboard">
            <UserPage
              pageType="DASHBOARD"
              message="Hello, John Smith"
            ></UserPage>
          </Route>
        </div>
      </BrowserRouter>
    </ThemeProvider>
    // <ul>
    //   // {state.posts.map((post) => {
    //   //   return (
    //   //     <li>
    //   //       <h2>ID: {post.id}</h2>
    //   //       <p>Username: {post.username}</p>
    //   //       <p>Password: {post.password}</p>
    //   //     </li>
    //   //   );
    //   // })}
    // </ul>
  );
};

export default App;
