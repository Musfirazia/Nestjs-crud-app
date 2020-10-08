import React from "react";
import {
 
  Route,Switch
} from "react-router-dom";
import { TodoList } from './Todolist'
import { CreateTodo } from './CreateTodo'
import { EditTodo } from './Edittodo'

// import RegisterLogin from "./RegisterLogin";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
// import {DeleteTodo} from './DeleteTodo'
export default function RouterConfig() {
  return (
    <div>
     
     
      <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/signup" component={RegisterPage}/> 
       {/* <Route path="/delete/:id" component={DeleteTodo}/>  */}
    </Switch>
    </div>
  )
}
