import React, { useState } from "react";
import Navbar from "./Components/NavBar";
import DisplayPosts from "./Components/DisplayPosts";
import CreatePost from "./Components/CreatePost";
import "./App.css"

function App() {
  const [posts, setPosts] = useState([
    {name: 'John', post: 'Its April fools day!'},
    {name: 'James', post: 'My new package came in today.'},
    {name: 'Bob', post: 'This is my first post!'}]);


  function addNewPost(entry){
    let newPosts = [entry,...posts];
    setPosts(newPosts)
  }

  return (
    <div>
      <Navbar/>
      <body class = 'body'>
        <CreatePost addNewPost={addNewPost}/>
        <DisplayPosts posts = {posts}/>
        </body>
    </div>
  );
}
export default App;
