import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchPost from "../API/fetchPost";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";
import MySelectTopic from "../helpers/Select/MySelectTopic";

export default function NewPost (props) {

  let navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [topic, setTopic] = useState('Python')

  function cancelPost(){
    console.log('Cancel')
    navigate(`/`, { replace: true })
  }

  async function createPost() {
    let rpcName = 'setNewPost'
    if (title && body) {
      let post = {
        title: title,
        body: body,
        topic: topic,
      }
      await fetchPost(rpcName, post)
      navigate(`/${topic}`, { replace: true })
    }
  }
  
  return (
  <div>
    <div className="sidebar">
      <h1>New Post</h1>
    </div>
    <div>
      <h3>Topic:</h3>
      <MySelectTopic />
    </div>
    <div>
      <MyInput nameInput={'Title'} inputValue={setTitle}/>
      <MyInput nameInput={'Description'} inputValue={setBody}/>
    </div>
    <div className={{display: "flex"}}>
      <MyButton nameButton={'Add Post'} buttonClick={createPost}/>
      <MyButton nameButton={'Cancel'} buttonClick={cancelPost}/>
    </div>
  </div>
  )
}