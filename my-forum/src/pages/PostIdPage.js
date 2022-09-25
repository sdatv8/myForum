import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchPost from "../API/fetchPost.js";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput.js";
import Comment from "../component/Comment.js";
import Sidebar from "../component/Sidebar.js";
import '../Styles/index.css'

export default function PostIdPage(props) {

  const navigate = useNavigate();
  const {postId} = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  useEffect(() => {
    const responce = async () => {
      const data = {
        postid: postId
      }
      const responce = await fetchPost(`getOnePost`, data)
      if (responce.status === `ok`) {
        console.log(`Post`,responce)
        setPost(responce.post)
        return responce.post
      }
      return null
    }
    responce()
  }, [])

  async function getComment () {
    const data = {
      postid: postId,
      sessionid: localStorage.getItem('sessionid'),
    }
    const responce = await fetchPost(`getCommentByPost`, data)
    if (responce.status === `ok`) {
      console.log(responce.comment)
      setComments(responce.comment)
    }
  }

  useEffect(() => {
    const responce = async () => {
      await getComment()
    }
    responce()
  }, [])

  async function addComment() {
    let rpcName = 'setNewComment'
    if (comment) {
      const data = {
        postid: postId,
        body: comment,
        sessionid: localStorage.getItem('sessionid'),
      }
      const responce = await fetchPost(rpcName, data)
      if (responce.status === `ok`) {
        console.log(responce.comment)
        setComment('')
      }
      await getComment ()
    }
    return null
  }



  return (
    <div>
      <Sidebar/>
      <div className="content-centr">
        <div className="container-md mt-3 mb-3 bg-white text-dark">
          <h1>{post.title}</h1>
          { post.image 
            ?
            <img src={post.image} className="card-img-top mb-3" alt="..."/>
            :
            <></>
          }
          <span>{post.body}</span>          
        </div>
        <div className="container-md mt-3 mb-3">
          <div className="form-floating" style={{marginBottom: '10px'}}>
            <textarea className="form-control" placeholder="Leave a comment here" id="textarea2" style={{height: '120px'}} onChange={(event) => setComment(event.target.value)}></textarea>
            <label for="textarea2">Comments</label>
          </div>
          <MyButton nameButton={'Submit'} styleButton={"btn btn-primary top-10"} buttonClick={addComment}/>
        </div>
        <div>
          <h3>Comments:</h3>
          {comments.map(comment => {
            return <Comment comment={comment}/>
          })}
        </div>
      </div>
    </div>
    
  )
}