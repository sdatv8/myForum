import React, { useState } from "react";
import '../../Styles/index.css'
import MyButton from "../Buttons/MyButton";
import MyInput from "../Inputs/MyInput";

export default function Modal({modalActive, saveNewTopic, activeModal, setNewTopic}) {

  const openModal = {
    display: 'block', 
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }

  return(
    <div class={modalActive ? "modal fade show" : "modal fade"} 
          id="staticBackdrop" role="dialog" 
          style={modalActive ? openModal : {}} 
          data-bs-backdrop="static" 
          data-bs-keyboard="false" 
          tabindex="-1" 
          aria-labelledby="staticBackdropLabel" 
          aria-hidden={modalActive ? "false" : "true"}>
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add New Topic</h5>
            <MyButton styleButton={"btn-close"} buttonClick={activeModal}/>
          </div>
          <div class="modal-body">
          <MyInput nameInput={'New topic'} styleInput={"form-control form-control-lg mb-3"} typeInput={"text"} inputValue={setNewTopic}/>
          </div>
          <div class="modal-footer">
            <MyButton nameButton={"Close"} styleButton={"btn btn-secondary"} buttonClick={activeModal}/>
            <MyButton nameButton={"Add"} styleButton={"btn btn-primary"} buttonClick={saveNewTopic}/>
          </div>
        </div>
      </div>
    </div>
  )
}