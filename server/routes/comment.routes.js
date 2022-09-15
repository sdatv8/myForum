import Router from "express"
import { createComment, getCommentByPost } from "../db/controller/comment.controller.js"

const commentRouter = new Router()

commentRouter.post('/api/getCommentByPost', getCommentByPost)
commentRouter.post('/api/setNewComment', createComment)

export default commentRouter
