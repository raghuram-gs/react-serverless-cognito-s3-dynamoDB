import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <header>

      </header>

      <Navbar fluid collapseOnSelect>
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
      </Navbar>

      <Routes />


      <footer>

      </footer>
    </div>

  );
}

export default App;
