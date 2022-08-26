import React, { useContext } from "react";
import { Routes, Route } from "react-router";
import { AuthContext } from "../context";
import {privateRoutes, publicRoutes} from '../router/routes'


export default function AppRoute () {

  const {isAuth, setIsAuth} = useContext(AuthContext)
  console.log(isAuth)

  return (
    isAuth ?
    <Routes>
      {privateRoutes.map(route => 
        <Route path={route.path} element={route.component}/>
      )}
    </Routes>
    :
    <Routes>
      {publicRoutes.map(route => 
        <Route path={route.path} element={route.component}/>
      )}
    </Routes>
  )
}