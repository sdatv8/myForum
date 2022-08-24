import React from "react";
import { Link } from "react-router-dom";
import '../Styles/index.css'

export default function PostItem (props) {

  return (
    <div className="post">
      <div>
          <h3><Link to={`/post/${props.post.id}`}>{props.number} {props.post.title}</Link></h3>
      </div>
    </div>
  )
}