import { Post } from "../models/postModel"


export const createPost = async (req, res) => {
  const {title, body, topicid, userid} = req.body
  console.log(title, body, topicid, userid)
  try{
    const newPost = await Post.create({
      title,
      body,
      topicid,
      userid,
    })
    console.log(newPost)
    res.json('ok')
  } catch (e) {
    console.log(e)
    req.json('Error 404')
  }
}

export const getPost = (req, res) => {
  res.json({test: 42})
}

export const getOnePost = (req, res) => {

}

export const updatePost = (req, res) => {

}

export const deletePost = (req, res) => {

}
