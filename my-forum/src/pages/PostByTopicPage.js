import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchGet from "../API/fetchGet.js";
import fetchPost from "../API/fetchPost.js";
import PostItem from "../component/PostItem";
import Sidebar from "../component/Sidebar.js";
import '../Styles/index.css'


export default function PostByTopicPage () {

  let {topic} = useParams()
  let [posts, setPost] = useState([])

  useEffect(() => {
    const responce = async () => {
      const data = {
        topicname: topic 
      }
      const responce = await fetchPost(`getPostsByTopic`, data)
      if (responce.status === `ok`) {
        setPost(responce.posts)
        return responce.posts
      }
      return null
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
          {posts.map((post, index) => {
            return <PostItem post={post} key={index} cardStyle={cardStyle}/>
          })}
      </div>
    </div>
  )
}