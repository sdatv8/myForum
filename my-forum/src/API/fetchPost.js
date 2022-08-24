import axios from "axios";

export default async function fetchPost(body){
  const response = await axios.post('http://127.0.0.1:3001/', body, {
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Request-Headers': '*'

      }
  })
  console.log(response)
  return response.data
}
