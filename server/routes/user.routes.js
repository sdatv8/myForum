import Router from "express"
import { createUser, deleteUser, getOneUser, getUser, updateUser } from "../db/controller/user.controller.js"

const router = new Router()

router.post('/user', createUser)
router.get('/user', getUser)
router.get('/user/:id', getOneUser)
router.put('/user', updateUser)
router.delete('/user/:id', deleteUser)

export default router
