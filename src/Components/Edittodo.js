import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Edittodo = (props) => {
  //props 
  const {todo,index,todoList,SettodoList} = props
  //State todo
  const [inputState,SetinputState] = useState({
    ID: "",
    FirstName: "",
    LastName: "",
    Username: "",
  })
  
  //Modal
  //Handle modal
  const [show, setShow] = useState(false);

  //OpenModal
  const openModal = () => {
    setShow(true);
    let Todo = {
      ID: todo.ID,
      FirstName: todo.FirstName,
      LastName: todo.LastName,
      Username: todo.Username,
    }
    SetinputState(Todo)
  };
  
  //CloseModal
  const closeModal = () => {
    setShow(false);
    SetinputState({
      ...inputState,
      FirstName: "",
      LastName: "",
      Username: "",
    });
  };

  //onChange Modal
  const handleOnchange = (event) => {
    SetinputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  //Handle Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();
    todoList[index] = inputState
    localStorage.setItem('todoList',JSON.stringify(todoList))
    SettodoList(JSON.parse(localStorage.getItem('todoList')))
    closeModal();
  };

  return (
    <>
      <Button variant="success" onClick={openModal} className='ml-2'>
        EDIT
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>TODO LIST</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-100"
              placeholder="First Name"
              name="FirstName"
              value={inputState.FirstName}
              onChange={handleOnchange}
            />
            <input
              type="text"
              className="w-100 mt-3"
              placeholder=" Last Name"
              name="LastName"
              value={inputState.LastName}
              onChange={handleOnchange}
            />
            <input
              type="text"
              className="w-100 mt-3"
              placeholder="User name"
              name="Username"
              value={inputState.Username}
              onChange={handleOnchange}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Edit changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Edittodo;
