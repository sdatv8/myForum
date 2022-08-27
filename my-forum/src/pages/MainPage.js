import React, { useContext, useEffect, useState } from "react";
import '../Styles/index.css'
import fetchGet from "../API/fetchGet.js";
import TopicItem from "../component/TopicItem";
import Sidebar from "../component/Sidebar";


export default function MainPage () {

  let [posts, setPosts] = useState([])

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

  function getUniqTopic(){
    let toptics = posts.map(post => post.topic)
    let uniqTopic = [...new Set(toptics)]
    return(uniqTopic)
  }
 


  return (
    <div>
      <Sidebar/>

      {/* <div>
        <h3><Link to={`/newPost`}>New Post</Link></h3>
      </div> */}
      
      <div className="content-centr">
        {getUniqTopic().map((topic, index) => 
          <TopicItem topic={topic} posts={getPostsByTopic(topic)} key={index}/>
        )}
      </div>
    </div>
  )
}
