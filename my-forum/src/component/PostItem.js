import React from "react";
import { Link } from "react-router-dom";
import '../Styles/index.css'

export default function PostItem (props) {
  return (
    <div>
      <div>
          <div className="card" style={props.cardStyle}>
            <img src="https://netpoint-dc.com/blog/wp-content/uploads/2019/10/1_zxixptvl4rzkx3eduj38xw.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <Link to={`/post/${props.post.postid}`} className="fs-5 text-decoration-none card-title">{props.post.title}</Link>
              <p className="card-text">{props.post.body}</p>
            </div>
          </div>
      </div>
    </div>
  )
}