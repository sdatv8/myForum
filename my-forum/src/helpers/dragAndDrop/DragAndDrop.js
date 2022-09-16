import React, { useState } from "react";
import convertBase64 from "../function/convertBase64";

export default function DragAndDrop ({getImage}) {

  const [drag, setDrag] = useState(false)

  function dragStartHandler(e) {
    e.preventDefault()
    setDrag(true)
  }

  function dragLeaveHandler(e) {
    e.preventDefault()
    setDrag(false)
  }

  async function onDropHandler(e) {
    e.preventDefault()
    let file = e.dataTransfer.files
    const base64 = await convertBase64(file[0]) 
    getImage(base64)
    setDrag(false)
  }



  return(
    <div>
      {drag 
        ?
      <div className="drop-area mb-3" style={{background: "#e3f2fd"}}
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          onDrop={e => onDropHandler(e)}
          >Отпустите изображение
      </div>
      :
      <div className="drop-area mb-3" 
          onDragStart={e => dragStartHandler(e)}
          onDragLeave={e => dragLeaveHandler(e)}
          onDragOver={e => dragStartHandler(e)}
          >Перетащите изображение
      </div>
      }
    </div>
  )
}
