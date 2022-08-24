import React from "react";
import './inputs.css'

export default function MyInput ({typeInput, styleInput='myInput', nameInput, inputValue}) {
  return (
    <input className={styleInput} type={typeInput} placeholder={nameInput} onChange={(event) => inputValue(event.target.value)}/>
  )
}
