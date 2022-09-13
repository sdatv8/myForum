import { craeteDefaultUsers } from "./admins"

export const defaultData = async () => {
  await craeteDefaultUsers()
}