import React,{useEffect} from "react";
import { Button } from "react-bootstrap";
import Edittodo from './Edittodo'

const Showtodolist = (props) => {
    //props
    const {index,todo,todoList,SettodoList,createID} = props

    //delete per item
    const deleteTodo = (id)=>{
       if(todo.ID===id){
        todoList.splice(index,1)
        localStorage.setItem('todoList',JSON.stringify(todoList))
        SettodoList(JSON.parse(localStorage.getItem('todoList')))
       }
    }

  return (
      <>
        <tr>
          <td>{index+1}</td>
          <td>{todo.ID}</td>
          <td>{todo.FirstName}</td>
          <td>{todo.LastName}</td>
          <td>{todo.Username}</td>
          <td>
            <Button variant ='danger' onClick={()=>deleteTodo(todo.ID)} >Delete</Button>
            <Edittodo todo = {todo} index={index} todoList={todoList} SettodoList={SettodoList}/>
          </td>
        </tr>
      </>
    
  );
};

export default Showtodolist;
