import Router from "express"
import { createUser, deleteUser, getOneUser, loginUser, updateUser } from "../db/controller/user.controller.js"

const router = new Router()

router.post('/api/getUser', createUser)
router.post('/api/loginUser', loginUser)
router.get('/api/user/:id', getOneUser)
router.put('/api/user', updateUser)
router.delete('/api/user/:id', deleteUser)

export default router
