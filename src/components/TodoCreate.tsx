import { useState } from "react";
import { useDispatch } from "react-redux"
import type { TodoType } from "../types/Types";
import { createTodo } from "../redux/todoSlice";


function TodoCreate() {
    const dispact = useDispatch();
    const[newTodo,setNewTodo] =useState<string>("")
    const handleCreateTodo =()=>{
      if(newTodo.trim().length===0){
        alert("Bir todo girin !")
        return;
      }
      const payload :TodoType ={
          id : Math.floor(Math.random()*9999999),
          content: newTodo
      }
      dispact(createTodo(payload));
      setNewTodo("");
    }
  return (
    <div className='todo-create'>
        <input value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}
         placeholder="Bir todo əlavə edin..." className="input" type="text" />
        <button onClick={handleCreateTodo} className="input-button">Əlavə et</button>
    </div>
  )
}

export default TodoCreate