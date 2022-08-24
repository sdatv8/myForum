import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchGet from "../API/fetchGet.js";
import MyButton from "../helpers/Buttons/MyButton";

export default function PostIdPage(props) {

  let navigate = useNavigate();
  let {postId} = useParams()
  let [post, setPost] = useState([])

  function cancelPost(){
    navigate("/", { replace: true })
  }

  useEffect(() => {
    const responce = async () => {
      const data = await fetchGet(`/post/${postId}`)
      setPost(data[0])
      return data
    }
    responce()
  }, [])



  return (
    <div>
      <h1>{post.title}</h1>
      <span>{post.body}</span>
      <MyButton nameButton={'Main Menu'} buttonClick={cancelPost}/>
    </div>
  )
}