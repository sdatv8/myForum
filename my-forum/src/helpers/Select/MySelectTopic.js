import React, { useEffect, useState } from "react";
import fetchGet from "../../API/fetchGet.js";

export default function MySelectTopic ({styleInput='myInput', nameInput, inputValue}) {


  const [topics, setTopic] = useState([])

  useEffect(() => {
    const responce = async () => {
      const data = await fetchGet(`/topics`)
      setTopic(data)
      return data
    }
    responce()
  }, [])


  return (
    <select>
      {console.log(topics)}
      {topics.map(topic => {
        return (<option value={topic}>{topic}</option>)
        })}
    </select>
  )
}