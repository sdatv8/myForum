import Op from "sequelize"
import { Comment } from "../models/CommentModel.js"
import { User } from "../models/userModel.js"

export const createComment = async (req, res) => {
  const {
    postid,
    body,
    sessionid,
  } = req.body

  try{
    const newComment = await Comment.create({
      body: body,
      PostPostid: postid,
      UserUserid: sessionid,
    })
    res.json({
      status: `ok`,
      error: ``
    })
  } catch (e) {
    console.log(e)
    res.json({
      status: `error`,
      error: `Not create post`
    })
  }
}

export const getCommentByPost = async (req, res) => {
  const {postid, sessionid} = req.body
  try{
    const commentByPost = await Comment.findAll({
      raw: true,
      where: {
        PostPostid: postid
      },
      include: User,
    })
    const comment = commentByPost.map(comment => {
      return({
        postid: comment.PostPostid,
        body: comment.body,
        username: comment['User.username'],
        updatecomment: comment.updatedAt,
      })
    })
    res.json({
      status: `ok`,
      comment: comment,
    })
  } catch (e) {
    console.log(e)
    res.json({
      status: `error`,
      comment: ``
    })
  }
}



export const getOneComment = async (req, res) => {

}


export const deleteComment = (req, res) => {

}

export const updateComment = (req, res) => {

}
