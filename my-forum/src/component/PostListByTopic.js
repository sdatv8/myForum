import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fetchGet from "../API/fetchGet.js";
import '../Styles/index.css'
import PostItem from "./PostItem";


export default function PostListByTopic () {

  let {topic} = useParams()
  let [posts, setPost] = useState([])

  useEffect(() => {
    const responce = async () => {
      const data = await fetchGet(`/${topic}`)
      setPost(data)
      return data
    }
    responce()
  }, [])

  return (
    <div >
        <h1><Link to={`/`}>Home Page</Link></h1>
      <div>
        {console.log(posts)}
          {posts.map((post, index) => {
            return <PostItem post={post} key={index}/>
          })}
      </div>
    </div>
  )
}