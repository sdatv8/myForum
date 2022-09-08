import { User } from "../models/userModel.js"

export const createUser = async (req, res) => {
  const {username, password} = req.body
  console.log(username, password)

  const newUser = await User.create({
    username: username,
    passwordhash: password,
  })
  console.log(newUser)
  res.json('ok')
}

export const getUser = async (req, res) => {
  const users = await User.findAll()
  console.log(users)
  res.json({username: 'username'})
}

export const getOneUser = (req, res) => {

}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}
