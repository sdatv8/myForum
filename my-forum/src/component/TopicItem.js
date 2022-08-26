import React from "react";
import { Link } from "react-router-dom";
import '../Styles/index.css'
import PostItem from "./PostItem";

export default function TopicItem ({topic, posts}) {

  return (
    <div className="App">
      <div>
          <h3><Link to={`/${topic}`}>{topic}</Link></h3>
          {posts.map((post, index) => 
            <PostItem post={post} key={index}/>
          )}
      </div>
    </div>
  )
}