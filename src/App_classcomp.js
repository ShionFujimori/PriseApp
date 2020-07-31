// This file is a class component version of App.js
// Won't use it, save it for the reference

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((posts) => this.setState({ posts: posts }));
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ul>
          {this.state.posts.map((post) => {
            return (
              <li>
                <h2>ID: {post.id}</h2>
                <p>Username: {post.username}</p>
                <p>Password: {post.password}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
