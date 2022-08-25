import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>ERROR 404</h1>
      <h3>Page Not found</h3>
      <Link to='/'>Go back</Link>
    </div>
  )
}