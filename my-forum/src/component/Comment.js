import React from "react";

export default function Comment (props) {
  return (
    <div>
      <div>
        <h3>{props.comment.userName}</h3>
        <h4>{props.comment.date}</h4>
      </div>
      <span>{props.comment.body}</span>
    </div>
  )
}