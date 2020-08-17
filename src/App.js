import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.scss";

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
    }
  },
});

const App = () => {
  const [state, setState] = useState({ posts: [] });
  // useEffect(() => {
  //   fetch("http://localhost:4000/posts")
  //     .then((response) => response.json())
  //     .then((posts) => setState({ posts: posts }));
  // }, [state]);

  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/signup" component={SignUpPage} />
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
