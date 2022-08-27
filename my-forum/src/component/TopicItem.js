import React from "react";
import { Link } from "react-router-dom";
import '../Styles/index.css'
import PostItem from "./PostItem";

export default function TopicItem ({topic, posts}) {

  const cardStyle = {
    width: '18rem',
    marginLeft: '10px', 
  };

  return (
      <div style={{margin: 'auto'}}>
          <Link to={`/${topic}`} className="fs-2 text text-decoration-none">{topic}</Link>
          <div  style={{display: 'flex'}}>
            {posts.map((post, index) => 
              <PostItem post={post} key={index} cardStyle={cardStyle}/>
            )}    
          </div>
      </div>
  )
}


