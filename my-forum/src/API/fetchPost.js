import axios from "axios";

export default async function fetchPost(rpc, body){
  let data = {
    rpcName: rpc,
    content: body
  }


  const response = await axios.post('http://127.0.0.1:3001/' + rpc, data, {
    headers: {
      'Content-Type': 'text/plain',
      }
  })
  console.log(response)
  return response.data
}
