import React, { useContext, useState } from "react";
import { AuthContext } from "../context";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";
import '../Styles/index.css'

export default function LoginPage () {
  
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const [users, setUser] = useState([
    {id: 1, login: 'login', password: 'password'},
  ])

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  function loginPage () {
    if (login && password) {
      setIsAuth(true)
      localStorage.setItem('auth', 'true')
    }
  }

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="container">
          <div className="form-floating mb-3">
            <MyInput typeInput={"email"} id={"floatingInput"} styleInput={"form-control"} nameInput={"Login"} inputValue={setLogin}/>
            <label for="floatingInput">Login</label>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="form-floating mb-3">
            <MyInput typeInput={"password"} id={"floatingPassword"} styleInput={"form-control"} nameInput={"Password"} inputValue={setPassword}/>
            <label for="floatingPassword">Password</label>
          </div>
          <MyButton nameButton={'Sign In'} styleButton={"btn btn-primary"} buttonClick={loginPage}/>
        </form>
      </div>
    </div>
  )
}
