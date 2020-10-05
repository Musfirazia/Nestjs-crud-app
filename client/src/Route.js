import React from "react";
import {
 
  Route,Switch
} from "react-router-dom";
import { TodoList } from './Todolist'
import { CreateTodo } from './CreateTodo'
import { EditTodo } from './Edittodo'
import { DeleteTodo} from './DeleteTodo'

export default function RouterConfig() {
  return (
    <div>
     
     
      <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route path="/edit/:id" component={EditTodo}/>
      <Route path="/create" component={CreateTodo}/>
      <Route path="/delete" component={DeleteTodo}/>
    </Switch>
    </div>
  )
}
