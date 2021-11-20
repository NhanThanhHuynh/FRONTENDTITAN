import React, { useEffect,useState } from "react";
import { Table } from "react-bootstrap";
import Showtodolist from "./Components/Showtodolist";
import Addingtodo from "./Components/Addingtodo";

function App() {

  //Create ID
  const createID = ()=>{
    return Math.floor(Date.now()+Math.random()*900000)
  }
  
  //State adding todo
  const [inputState, SetinputState] = useState({
    ID: createID(),
    FirstName: "",
    LastName: "",
    Username: "",
  });

   //todoList 
   const [todoList,SettodoList]= useState([])
 
  //render for adding todo
  useEffect(()=>{
    //local List
    let localList = JSON.parse(localStorage.getItem('todoList')) || []
    SettodoList(localList)
  },[inputState,SetinputState])
  
  return (
    <div>
      <Addingtodo inputState={inputState} SetinputState={SetinputState} createID={createID} />
      <Table striped bordered responsive hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>IDENTIFY</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => {
            return <Showtodolist key={index} todo={todo} index={index} todoList={todoList}  SettodoList={SettodoList} createID={createID}  />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
