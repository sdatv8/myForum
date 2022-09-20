import React from "react";
import { Link } from "react-router-dom";
import '../Styles/index.css'

export default function PostItem (props) {
  return (
    <div>
      <div>
          <div className="card" style={props.cardStyle}>
            <img src={props.post.image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <Link to={`/post/${props.post.postid}`} className="fs-5 text-decoration-none card-title">{props.post.title}</Link>
              <p className="card-text">{props.post.body}</p>
            </div>
          </div>
      </div>
    </div>
  )
}