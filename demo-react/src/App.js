import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App container">
      <header>
        <h1>AWS Interactive Challenges</h1>
      </header>

      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">AWS Learning</Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/signup">Signup</NavItem>
            <NavItem href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
 
      <Routes />
      
      <footer>
      @Copyright 2020
      Raghuram
      </footer>
    </div>

  );
}

export default App;
