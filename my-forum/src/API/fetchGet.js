import axios from "axios";

export default async function fetchGet(url = '/'){
  const responce = await axios.get('http://127.0.0.1:3001' + url)
  console.log(responce)
  return responce.data
}
