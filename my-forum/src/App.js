import React from "react";
import { Routes, Route } from "react-router";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage"
import PostIdPage from "./component/PostIdPage";
import NewPost from "./component/NewPost";
import PostListByTopic from "./component/PostListByTopic";


export default function App () {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/newPost" element={<NewPost/>}/>
      <Route path="/post/:postId" element={<PostIdPage/>}/>
      <Route path="/:topic" element={<PostListByTopic/>}/>
      <Route path="*" element={<MainPage/>}/>
    </Routes>
  )

}