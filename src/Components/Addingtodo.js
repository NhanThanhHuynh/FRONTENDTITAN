import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const Addingtodo = (props) => {
  //props 
  const { SetinputState, inputState,createID } = props;

  //Modal
  //Handle modal
  const [show, setShow] = useState(false);

  //OpenModal
  const openModal = () => {
    setShow(true);
  };
  
  //CloseModal
  const closeModal = () => {
    setShow(false);
    SetinputState({
      ID:createID(),
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
    let tmp = JSON.parse(localStorage.getItem("todoList")) || [];
    let storage = [...tmp, inputState];
    localStorage.setItem("todoList", JSON.stringify(storage));
    closeModal();
  };

  return (
    <>
      <Button variant="success" className="addtodo" onClick={openModal}>
        <i className="fa fa-plus" aria-hidden="true"></i>
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
                Save changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Addingtodo;
