export const getTodos = () => fetch("http://localhost:4000/todos").then(res => res.json())

export const createTodo = (product) => fetch("http://localhost:4000/todos", {
  method: "POST",
  headers: {
    
    "Accept": "application/json",
    'Content-Type':'application/json'
  },
  body: JSON.stringify(product)
})  

export const updateTodo = (title,id) => fetch(`http://localhost:4000/todos/${id}`, {
  method: "PATCH",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body:JSON.stringify(title)
 
})  
export const deleteTodo = (id) => fetch(`http://localhost:4000/todos/${id}`, {
  method: "DELETE",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})  
export const getTodo = (id) => fetch(`http://localhost:4000/todos/${id}`).then(res => res.json())