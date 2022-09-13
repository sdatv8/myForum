import { User } from "../models/userModel.js"

export const createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    login,
    email,
    password,
  } = req.body
  try{
    const newUser = await User.create({
      firstname: firstName,
      lastname: lastName,
      username: login,
      email: email,
      password: password,
    })
    if (newUser) {
      res.json({
        status: `ok`,
        error: ``
      })
    } else {
      res.json({
        status: `error`,
        error: `Not create user`
      })
    }
  } catch (e) {
    console.log(e)
    req.json('Error 404')
  }
}



export const loginUser = async (req, res) => {
  const {
    login,
    password,
  } = req.body
  console.log(req.body)
  const user = await User.findOne({ where: { username: login } })
  if (user && user.dataValues.password === password) {
    res.json({
      status: `ok`,
      sessionId: user.dataValues.userid,
      error: ``
  })
  } else {
    res.json({
      status: `error`,
      sessionId: ``,
      error: `Not found user`
  })
  }
}

export const getOneUser = (req, res) => {

}

export const updateUser = (req, res) => {

}

export const deleteUser = (req, res) => {

}
