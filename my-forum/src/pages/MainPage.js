import React, { useContext, useEffect, useState } from "react";
import '../Styles/index.css'
import fetchGet from "../API/fetchGet.js";
import TopicItem from "../component/TopicItem";
import Sidebar from "../component/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import PostItem from "../component/PostItem";


export default function MainPage () {

  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState([])

  useEffect(() => {
    const responce = async () => {
      const data = await fetchGet()
      setPosts(data)
      return data
    }
    responce()
  }, [])

  function searchFindPosts() {
    const findPosts = posts.filter(post => post.title.toLowerCase().includes(query))
    console.log(findPosts)
    setSearchQuery(findPosts)
    setQuery('')
  }

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
      <Sidebar setSearchQuery={setQuery} searchPosts={searchFindPosts}/>
      <div className="content-centr">
      {searchQuery.length
        ?
        searchQuery.map((post, index) => 
          <PostItem post={post} key={index}/>
        )
        :
        getUniqTopic().map((topic, index) => 
          <TopicItem topic={topic} posts={getPostsByTopic(topic)} key={index}/>
        )
      }
      </div>
    </div>
  )
}
