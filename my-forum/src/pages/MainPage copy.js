import React, { useEffect, useState } from "react";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";
import PostItem from "../component/PostItem";
import '../Styles/index.css'
import { useNavigate,  } from "react-router-dom";
import fetchGet from "../API/fetchGet.js";


export default function MainPage () {

  let navigate = useNavigate();

  // let [posts, setPosts] = useState([
  //   {id: 1, topic:'Python', title: 'TilteName', body: 'description', update: new Date('December 17')},
  //   {id: 2, topic:'JavaScirpt', title: 'TilteName', body: 'description',  update: new Date('December 17')},
  //   {id: 3, topic:'Java', title: 'TilteName', body: 'description', update: new Date('December 17')},
  // ])

  let [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  function createPost(post) {

    const newPost ={
      id: new Date(),
      title: title,
      body: body
    }
    console.log(newPost)
    if (title && body){
      setPosts([...posts, newPost])
      setTitle('')
      setBody('')
    }
  }

  useEffect(() => {
    const responce = async () => {
      const data = await fetchGet()
      setPosts(data)
      return data
    }
    responce()
  }, [])

  async function newPost(){
    navigate("/newPost", { replace: true })
  }


  return (
    <div className="App">
      <div className="sidebar">
        <h1>Home Page</h1>
        <MyButton nameButton={'+'} buttonClick={newPost}/>
      </div>
      <div>
        {console.log(posts)}
        {posts.map((post, index) => {
          return <PostItem post={post} number={index} key={post.id}/>
        })}
      </div>
    </div>
  )
}
