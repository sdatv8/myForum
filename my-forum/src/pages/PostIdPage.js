import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchGet from "../API/fetchGet.js";
import fetchPost from "../API/fetchPost.js";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput.js";
import Comment from "../component/Comment.js";

export default function PostIdPage(props) {

  const navigate = useNavigate();
  const {postId} = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

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

  useEffect(() => {
    const responce = async () => {
      const comment = await fetchGet(`/comment/${postId}`)
      setComments(comment)
    }
    responce()
  }, [comment])

  async function addComment() {
    let rpcName = 'setComment'
    if (comment) {
      let post = {
        id: postId,
        userName: 'Mikle',
        body: comment,
      }
      await fetchPost(rpcName, post)
      setComment('')
    }
  }



  return (
    <div>
      <h1>{post.title}</h1>
      <span>{post.body}</span>
      <MyButton nameButton={'Main Menu'} buttonClick={cancelPost}/>
      <div>
        <MyInput nameInput={'Comment'} inputValue={setComment}/>
        <MyButton nameButton={'Add'} buttonClick={addComment}/>
      </div>
      <div>
        {comments.map(comment => {
          return <Comment comment={comment}/>
        })}
      </div>
    </div>
    
  )
}