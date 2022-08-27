import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchGet from "../API/fetchGet";
import fetchPost from "../API/fetchPost";
import Modal from "../helpers/Modals/Modal.js";
import Sidebar from "../component/Sidebar";
import MyButton from "../helpers/Buttons/MyButton";
import MyInput from "../helpers/Inputs/MyInput";
import MySelectTopic from "../helpers/Select/MySelectTopic";

export default function NewPostPage (props) {

  let navigate = useNavigate();

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [topic, setTopic] = useState('Python')
  const [topics, setTopics] = useState([])
  const [modalActive, setModalActive] = useState(false)
  const [newTopic, setNewTopic] = useState('')


  async function createPost() {
    let rpcName = 'setNewPost'
    if (title && body) {
      let post = {
        title: title,
        body: body,
        topic: topic,
      }
      await fetchPost(rpcName, post)
      navigate(`/${topic}`, { replace: true })
    }
  }
  function activeModal () {
    setModalActive(!modalActive)
    setNewTopic('')
  }
  function saveNewTopic () {
    setModalActive(false)
    if (newTopic) {
      setTopics([...topics, newTopic])
      setTopic(newTopic)
    }
    setNewTopic('')
  }

  useEffect(() => {
    const responce = async () => {
      const data = await fetchGet(`/topics`)
      setTopics(data)
      return data
    }
    responce()
  }, [])
  
  return (
  <div>
    <Sidebar/>
    <div className="content-centr">
      <div className="container-md mt-3 mb-3">
        <div>
          <MyInput nameInput={'Title'} styleInput={"form-control form-control-lg mb-3"} typeInput={"text"} inputValue={setTitle}/>
        </div>
        <form className="input-group mb-3">
            <MySelectTopic inputValue={setTopic} topics={topics}/>
            <MyButton nameButton={'+'} styleButton={"btn btn-outline-secondary"} buttonClick={activeModal}/>
        </form>
        <Modal modalActive={modalActive} saveNewTopic={saveNewTopic} activeModal={activeModal} setNewTopic={setNewTopic}/>
        <div className="form-floating" style={{marginBottom: '10px'}}>
          <textarea className="form-control" placeholder="Leave a comment here" id="textarea2" style={{height: '420px'}} onChange={(event) => setBody(event.target.value)}></textarea>
          <label for="textarea2">Send text...</label>
        </div>
        <MyButton nameButton={'Add New Post'} styleButton={"btn btn-primary top-10"} buttonClick={createPost}/>
      </div>
    </div>
  </div>
  )
}