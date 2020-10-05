export const getTodos = () => fetch("http://localhost:4000/todos").then(res => res.json())

export const createTodo = (product) => fetch("http://localhost:4000/todos", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
})  

export const updateTodo = (product, id) => fetch(`http://localhost:4000/todos/${id}`, {
  method: "PATCH",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
})  
export const deleteTodo = (product, id) => fetch(`http://localhost:4000/todos/${id}`, {
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(product)
})  
export const getTodo = (id) => fetch(`http://localhost:4000/todos/${id}`).then(res => res.json())