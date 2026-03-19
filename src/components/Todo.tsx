import { CiEdit } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { useRef } from "react";
import '../css/Todo.css'
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import { useState } from "react";

interface TodoProps {
    todoProps: TodoType
}
function Todo({todoProps}:TodoProps) {
    const dispact = useDispatch();
    const[edit , setEdit]=useState<boolean>(false);
    const[newTodo,setNewTodo] = useState(todoProps.content);
    const handleRemoveTodo =()=>{
         dispact(removeTodo(todoProps.id))
    }
    const inputRef = useRef<HTMLInputElement>(null);
    const handleUpdateTodo =()=>{
      const payload :TodoType ={
        id : todoProps.id,
        content : newTodo
      }
      if(newTodo.length===0){
        alert("Mətin boşdur")
      }
      else{
        dispact(updateTodo(payload));
      setEdit(false);
      }
    
    }
    const handleEdit = () => {
  setEdit(true);
  setTimeout(() => {
    inputRef.current?.focus();
  }, 0);
};
   
  return (
    <div className="todo-info">
      {/* <div style={{fontSize:"20px"}}>{todoProps.content}</div> */}
      {edit ? <input  ref={inputRef} style={{width:"400px", border:"none", outline:"none",borderBottom:"1px solid black" }} type="text" value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) =>setNewTodo(e.target.value)} />
       :<div style={{fontSize:"20px"}}>{newTodo} {edit && "|"}</div> }
        <div className="icon-dec">
              <CiCircleRemove onClick={handleRemoveTodo} className="icon" />
             {edit ? <CiCircleCheck  onClick={handleUpdateTodo} className="icon" /> : <CiEdit className="icon" onClick={handleEdit} />}
              
        </div>
    </div>
  )
}

export default Todo