import React, { useEffect, useState } from "react";
import fetchGet from "../../API/fetchGet.js";

export default function MySelectTopic ({inputValue, topics}) {

  return (
    <select  class="form-select form-select-lg" onChange={(event) => inputValue(event.target.value)}>
      {topics.map(topic => {
        return (<option value={topic}>{topic}</option>)
        })}
    </select>
  )
}