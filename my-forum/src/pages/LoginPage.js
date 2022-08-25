import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";
import '../Styles/index.css'

export default function LoginPage () {
  
  let navigate = useNavigate();
  const [users, setUser] = useState([
    {id: 1, login: 'login', password: 'password'},
  ])

  

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function loginPage () {
    navigate(`/`, { replace: true })
  }


  return (
    <div className="loginPage">
      <h1>Welcome</h1>
      <form >
        <p>
          <strong>L: </strong>
          <MyInput nameInput={"login"} inputValue={setLogin}/>
        </p>
        <p>
          <strong>P: </strong>
          <MyInput nameInput={"password"} inputValue={setPassword}/>
        </p>
        <MyButton nameButton={'Sign In'} buttonClick={loginPage}/>
      </form>
    </div>
  )
}
