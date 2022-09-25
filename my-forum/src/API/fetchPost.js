import axios from "axios";

export default async function fetchPost(rpc, data){

  const response = await axios.post('http://127.0.0.1:3001/api/' + rpc, data, {
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
      }
  })
  return response.data
}
