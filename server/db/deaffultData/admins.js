import { User } from "../models/userModel";

export const craeteDefaultUsers = async () => {
  await User.create({
    firstname: "admin",
    lastname: "adminov",
    username: "admin",
    email: "email",
    password: "password",
  })
}

