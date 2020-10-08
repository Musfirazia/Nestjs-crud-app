import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { getTodos, deleteTodo} from "./api"
import { useHistory } from "react-router-dom";

export const TodoList = () => {
  const [items, setItems] = useState([]);
  //const match = useRouteMatch();

  const history = useHistory();
  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodos()
      setItems(todos);

    }
    fetchItems()
  }, [])
 
  // const onclick= async (id) => {

  //   await deleteTodo(id);

  // }

  return (
    <div className="container">
      <div className="mt-3">
        <h3>Todo List</h3>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Text</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              items.map(todo => (
                <tr key={todo.id}>
                  <td className="headings">
                    {todo.title}
                  </td>
                  <td>
                    <Link className="headings" to={`/edit/${todo.id}`}>Edit</Link>

                  </td>
                  <td>
                    <button className="btn btn-outline-primary" onClick={async () => { await deleteTodo(todo.id);    history.push("/"); await getTodos();  }}>Delete</button></td>
                  {/* //             <Link to={`/delete/${todo.id}` onclick=()=>{{ onDelete = async () => {
        // await deleteTodo(todo.id)
        // }}>Delete</Link> */}



                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};