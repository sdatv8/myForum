import React from "react";

export default function Comment (props) {
  return (
    <div  className="container-md mt-3 mb-3 bg-white text-dark">
      <div className="d-flex justify-content-between fs-5 text">
        <p>{props.comment.userName}</p>
        <p className="fs-6 text-muted">{props.comment.date}</p>
      </div>
      <div>
        <p className="font-monospace">{props.comment.body}</p>
      </div>
    </div>
  )
}