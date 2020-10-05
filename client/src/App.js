import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import RouterConfig from './Route.js';

function App() {
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
        </ul>
      </nav>
      <RouterConfig />
    </div>
  );
}

export default App;
