import React from "react";

export default function MySelectTopic ({inputValue, topics}) {

  return (
    <select  class="form-select form-select-lg" onChange={(event) => inputValue(event.target.value)}>
      {topics.map(topic => {
        return (<option value={topic}>{topic}</option>)
        })}
    </select>
  )
}