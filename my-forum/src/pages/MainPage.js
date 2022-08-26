import React, { useContext, useEffect, useState } from "react";
import '../Styles/index.css'
import fetchGet from "../API/fetchGet.js";
import TopicItem from "../component/TopicItem";
import { Link } from "react-router-dom";
import MyInput from "../helpers/Inputs/MyInput";
import MyButton from "../helpers/Buttons/MyButton";
import { AuthContext } from "../context";


export default function MainPage () {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  let [posts, setPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const responce = async () => {
      const data = await fetchGet()
      setPosts(data)
      return data
    }
    responce()
  }, [])

  function getPostsByTopic(topic) {
    let postByTopic = posts.filter(post => post.topic === topic)
    return(postByTopic.slice(0,3))
  }

  function logout() {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  function getUniqTopic(){
    let toptics = posts.map(post => post.topic)
    let uniqTopic = [...new Set(toptics)]
    return(uniqTopic)
  }
 


  return (
    <div className="App">
      <div className="sidebar">
        <h1>Home Page</h1>
        <div>
          <MyButton nameButton={'Log Out'} buttonClick={logout}/>
        </div>
        <div>
          <MyInput nameInput={'Search...'} inputValue={setSearchQuery}/>
        </div>
      </div>
      <div>
        <h3><Link to={`/newPost`}>New Post</Link></h3>
      </div>
      
      <div>
        {getUniqTopic().map((topic, index) => 
          <TopicItem topic={topic} posts={getPostsByTopic(topic)} key={index}/>
        )}
      </div>
    </div>
  )
}
