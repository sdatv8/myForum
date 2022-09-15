import axios from "axios";

export default async function fetchGet(rpc){
  const responce = await axios.get('http://127.0.0.1:3001/api/' + rpc)
  return responce.data
}
