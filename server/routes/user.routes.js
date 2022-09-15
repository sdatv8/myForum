import Router from "express"
import { createUser, deleteUser, getOneUser, loginUser, updateUser } from "../db/controller/user.controller.js"

const userRoutes = new Router()

userRoutes.post('/api/getUser', createUser)
userRoutes.post('/api/loginUser', loginUser)
userRoutes.get('/api/user/:id', getOneUser)
userRoutes.put('/api/user', updateUser)
userRoutes.delete('/api/user/:id', deleteUser)

export default userRoutes
