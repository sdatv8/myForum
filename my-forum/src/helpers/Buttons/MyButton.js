import React from "react";
import './buttons.css'

export default function MyButton ({nameButton, styleButton='myButton', buttonClick}) {

  function handleSubmit(event) {
    event.preventDefault()
    buttonClick()
  }

  return (
    <button className={styleButton} onClick={event => {handleSubmit(event)}}>
      {nameButton}
    </button>
  )
}
