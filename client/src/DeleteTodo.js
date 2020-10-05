import { deleteTodo } from "./api";
import { TodoList } from "./Todolist";

import React ,{ useEffect } from "react";
import { useRouteMatch,useHistory} from "react-router-dom";

export const DeleteTodo = () => {
    const match = useRouteMatch()
  
    const history = useHistory()
  
    useEffect(() => {
      const onSubmit = async (data) => {
        await deleteTodo(data, match.params.id)
        history.push("/")
      }
      
      onSubmit()
    });
  
    
    return (
      <div className="container">
        <div className="mt-3">
       <TodoList/>
        </div>
      </div>
    ) 
     
  };