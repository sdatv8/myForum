import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fetchPost from "../API/fetchPost";
import { AuthContext } from "../context";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";
import '../Styles/index.css'

export default function LoginPage () {

  let navigate = useNavigate()
  
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  async function loginPage () {
    if (login && password) {
      let userData = {
        login,
        password,
      }
      const responce = await fetchPost('loginUser', userData)
      if(responce.status === `ok`){
        setIsAuth(true)
        localStorage.setItem('token', responce.token)
        localStorage.setItem('sessionid', responce.sessionId)
      } else {
        console.log(`Error: `, responce.error)
        setErrorMessage(responce.error)
      }
      
    }
  }

  function registerPage() {
    navigate(`/registr`, { replace: true })
  }

  return (
    <div className="login-background">
      <div className="login-container">
        <form className="container">
        <h1>Log In</h1>
          <div className="form-floating mb-3">
            <MyInput typeInput={"email"} id={"floatingInput"} styleInput={"form-control"} nameInput={"Login"} inputValue={setLogin}/>
            <label for="floatingInput">Login</label>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="form-floating mb-2">
            <MyInput typeInput={"password"} id={"floatingPassword"} styleInput={"form-control"} nameInput={"Password"} inputValue={setPassword}/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="mb-3 ">
            <text>Not a member? </text>
            <Link className ="navbar-brand text-primary" to="/registr">Register</Link>
          </div>
          <div className="d-flex flex-row-reverse">
            <div>
              <MyButton nameButton={'Log In'} styleButton={"btn btn-primary "} buttonClick={loginPage}/>
            </div>
            <div className="ml-3">
              {errorMessage
              ?
                <div className="text-danger fs-6 px-4 p-1">
                  <p>{errorMessage}</p>
                </div>
              :
              <div></div>
              }
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
