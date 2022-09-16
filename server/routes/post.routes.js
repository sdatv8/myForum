import Router from "express"
import { createPost, getOnePost, getPosts, getPostsByTopic, getUniqueTopic } from "../db/controller/post.controller.js"

const postRouter = new Router()

postRouter.post('/api/createPost', createPost)
postRouter.post('/api/getPosts', getPosts)
postRouter.post('/api/getOnePost', getOnePost)
postRouter.post('/api/getPostsByTopic', getPostsByTopic)
postRouter.post('/api/getUniqueTopic', getUniqueTopic)
// router.post('/api/user/:id', deleteUser)

export default postRouter
