import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { Link, useHistory } from "react-router-dom";
import { onError } from "./libs/errorLib";

function App() {
  const history = useHistory();
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch (e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }


  async function handleLogout() {
    await Auth.signOut();  
    userHasAuthenticated(false);
    history.push("/login");
  }
  
  return (
    !isAuthenticating &&
    <div className="App container">
      <header>
        <h1>AWS Master</h1>
      </header>

      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">AWS Master</Link>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Collapse>

          <Nav>
            <NavItem>
              <Link to="/study">Study material</Link>
            </NavItem>
            <NavItem>
              <Link to="/notes/new">Take notes</Link>
            </NavItem>
            <NavItem>
              <Link to="/design">Design</Link>
            </NavItem>
          </Nav>


          {isAuthenticated
            ? <>
              <Nav pullRight>
                <NavItem onClick={handleLogout}>Logout</NavItem>
              </Nav>
            </>
            : <>
              <Nav pullRight>
                <NavItem href="/signup">Signup</NavItem>
                <NavItem href="/login">Login</NavItem>
              </Nav>
            </>
          }

        </Navbar.Collapse>

      </Navbar>

      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>

      <footer>
        @Copyright 2020
        Raghuram
      </footer>
    </div>

  );
}

export default App;
