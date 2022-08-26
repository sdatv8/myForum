import React from "react";

export default function MyInput ({typeInput, styleInput='myInput', nameInput, inputValue, id}) {
  return (
    <input className={styleInput}  type={typeInput} id={id} placeholder={nameInput} onChange={(event) => inputValue(event.target.value)}/>
  )
}
