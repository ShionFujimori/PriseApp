import React, { useState, useEffect } from "react";

const App = (props) => {
  const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => response.json())
      .then((posts) => setData({ posts: posts }));
  }, [setData]);

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        {data.posts.map((post) => {
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
};

export default App;
