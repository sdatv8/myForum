import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchGet from "../API/fetchGet.js";
import PostItem from "../component/PostItem";
import Sidebar from "../component/Sidebar.js";
import '../Styles/index.css'


export default function PostByTopicPage () {

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

  const cardStyle = {
    width: '50rem',
    marginTop: '15px'
  };

  return (
    <div >
        <Sidebar/>
      <div className="content-centr">
        {console.log(posts)}
          {posts.map((post, index) => {
            return <PostItem post={post} key={index} cardStyle={cardStyle}/>
          })}
      </div>
    </div>
  )
}