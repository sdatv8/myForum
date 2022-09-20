import React, { useContext, useEffect, useState } from "react";
import '../Styles/index.css'
import TopicItem from "../component/TopicItem";
import Sidebar from "../component/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import PostItem from "../component/PostItem";
import fetchPost from "../API/fetchPost";


export default function MainPage () {

  const [posts, setPosts] = useState([])
  const [topics, setTopics] = useState([])
  const [query, setQuery] = useState('')
  const [searchQuery, setSearchQuery] = useState([])

  useEffect(() => {
    const responce = async () => {
      const data = await fetchPost(`getPosts`, {
        sessionid: localStorage.getItem('sessionid'),
      })
      if (data.status === `ok`) {
        setPosts(data.posts)
        setTopics(data.toptics)
        console.log(data.post)
        return data
      }
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
    console.log(topics)
    let postByTopic = posts.filter(post => post.topic === topic)
    console.log(postByTopic)
    return(postByTopic.slice(0,3))
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
        topics.map((topic, index) => 
          <TopicItem topic={topic} posts={getPostsByTopic(topic)} key={index}/>
        )
      } 
      </div>
    </div>
  )
}
