import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Styles/index.css'

export default function LoginPage () {
  
  const [users, setUser] = useState([
    {id: 1, login: 'login', password: 'password'},
  ])

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  // function createUser(event) {
  //   event.preventDefault()
  //   const newUser = {
  //     id: 1, 
  //     login: login,
  //     password: password
  //   }
  //   setUser([...users, newUser])
  //   setLogin('')
  //   setPassword('')
  // }

  function checkUser(event) {
    event.preventDefault()
    let userExsist = users.filter(user => login === user.login && password === user.password)
    console.log(userExsist)
    if (userExsist) {
      
    }
  }
 


  return (
    <div className="loginPage">
      <h1>Welcome</h1>
      <form >
        <p>
          <strong>L: </strong>
          <input name='login' placeholder="login" onChange={(event) => setLogin(event.target.value)}/>
        </p>
        <p>
          <strong>P: </strong>
          <input type='password' placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
        </p>
        <button><Link to='/'>Sign In</Link></button>
        {/* <button onClick={(event) => checkUser(event)}>Sig In</button> */}
      </form>
    </div>
  )
}
