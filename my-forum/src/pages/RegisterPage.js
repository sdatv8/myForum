import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchPost from "../API/fetchPost";
import { AuthContext } from "../context";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";
import '../Styles/index.css'

export default function RegisterPage () {

  let navigate = useNavigate()
  
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [login, setLogin] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function register () {
    if (login && email && firstName && lastName) {
      let userData = {
        firstName,
        lastName,
        login,
        email,
        password,
      }
      const responce = await fetchPost('getUser', userData)
      console.log(responce.status)
      if(responce.status === `ok`){
        navigate(`/login`, { replace: true })
      } else {
        console.log(`Error: `, responce.error)
      }
    }
  }

  function loginPage() {
    navigate(`/login`, {replace: true})
  }

  return (
    <div className="login-background">
      <div className="registr-container">
        <form className="container">
          <h1>Sign Up</h1>
          <div className="form-floating mb-3">
            <MyInput typeInput={"name"} id={"floatingInput"} styleInput={"form-control"} nameInput={"FirstName"} inputValue={setfirstName}/>
            <label for="floatingInput">First Name</label>
          </div>
          <div className="form-floating mb-3">
            <MyInput typeInput={"name"} id={"floatingInput"} styleInput={"form-control"} nameInput={"LastName"} inputValue={setlastName}/>
            <label for="floatingInput">Last Name</label>
          </div>
          <div className="form-floating mb-3">
            <MyInput typeInput={"email"} id={"floatingInput"} styleInput={"form-control"} nameInput={"Login"} inputValue={setLogin}/>
            <label for="floatingInput">Login</label>
          </div>
          <div className="form-floating mb-3">
            <MyInput typeInput={"email"} id={"floatingInput"} styleInput={"form-control"} nameInput={"Email"} inputValue={setEmail}/>
            <label for="floatingInput">Email</label>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="form-floating mb-3">
            <MyInput typeInput={"password"} id={"floatingPassword"} styleInput={"form-control"} nameInput={"Password"} inputValue={setPassword}/>
            <label for="floatingPassword">Password</label>
          </div>
          <div className="d-flex justify-content-evenly">
            <div>
              <MyButton nameButton={'Cancel'} styleButton={"btn btn-primary"} buttonClick={loginPage}/>
            </div>
            <div>
              <MyButton nameButton={'Sign Up'} styleButton={"btn btn-primary"} buttonClick={register}/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
