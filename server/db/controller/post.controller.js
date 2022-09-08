import { PostModel } from "../db/models/PostModel"


export const createPost = (req, res) => {
  const {name} = req.body
  console.log(name)
  res.json('ok')
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
