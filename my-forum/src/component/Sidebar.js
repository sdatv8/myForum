import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";

export default function Sidebar () {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const [searchQuery, setSearchQuery] = useState('')

  function logout() {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <nav className ="navbar bg-light">
      <div className ="container-fluid">
        <Link className ="navbar-brand" to="/">Home Page</Link>
      <form className ="d-flex" role="search">
        <MyInput typeInput={"search"} styleInput={"form-control me-2"} nameInput={"Search"} inputValue={setSearchQuery}/>
        <MyButton nameButton={'Search'} styleButton={"btn btn-outline-success"} buttonClick={logout}/>
      </form>
      <MyButton nameButton={'Log Out'} styleButton={"btn btn-primary"} buttonClick={logout}/>
    </div>
    </nav>
  )
}

