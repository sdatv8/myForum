import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoute from "./component/AppRoute.js";
import { AuthContext } from "./context/index.js";

export default function App () {

  const [isAuth, setIsAuth] = useState(false)

  useEffect( () => {
    if (localStorage.getItem('sessionid')) {
      setIsAuth(true)
    }
  })

  return (
    <AuthContext.Provider value={{
      isAuth, setIsAuth
    }}>
      <React.StrictMode>
        <BrowserRouter>
          <AppRoute/>
        </BrowserRouter>
      </React.StrictMode>
    </AuthContext.Provider>
  )
}