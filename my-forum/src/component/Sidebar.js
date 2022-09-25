import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";

export default function Sidebar ({setSearchQuery, searchPosts}) {
  const {isAuth, setIsAuth} = useContext(AuthContext)



  function logout() {
    setIsAuth(false)
    localStorage.removeItem('sessionid')
    localStorage.removeItem('token')
  }

  return (
    <nav className ="navbar" style={{backgroundColor: '#e3f2fd'}}>
      <div className ="container-fluid">
        <Link className ="navbar-brand" to="/" buttonClick={searchPosts}>Home Page</Link>
        <Link className ="navbar-brand" to="/newPost">New Post</Link>
      <form className ="d-flex" role="search">
        <MyInput typeInput={"search"} styleInput={"form-control me-2"} nameInput={"Search"} inputValue={setSearchQuery}/>
        <MyButton nameButton={'Search'} styleButton={"btn btn-outline-success"} buttonClick={searchPosts}/>
      </form>
      <MyButton nameButton={'Log Out'} styleButton={"btn btn-primary"} buttonClick={logout}/>
    </div>
    </nav>
  )
}

