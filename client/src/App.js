import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import RouterConfig from './Route.js';
import axios from 'axios';
import {useHistory} from "react-router-dom"

function App() {
  const history = useHistory()
  const logoutHandler = () => {
    axios.get(`http://localhost:4000/logout`).then(response => {
      if (response.status === 200) {
        history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };
  return (
    <div className="App">

      <nav className="navbar bg-primary navbar-expand-lg navbar-light">

        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Todos</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Todo</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/signup" className="nav-link">Signup</Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/logout" className="nav-link">logout</Link>
          </li> */}
          <button className="btn btn-outline-primary" onClick={logoutHandler}>Logout</button>
        </ul>
      </nav>
      <RouterConfig />
    </div>
  );
}

export default App;
