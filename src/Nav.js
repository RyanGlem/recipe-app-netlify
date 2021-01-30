import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import { AddRecipeView } from "./views/AddRecipeView";
import { FavoritesView } from "./views/FavoritesView";
import { ProfileView } from "./views/ProfileView";
import { RecipesView } from './views/RecipesView';
import { HomeView } from "./views/HomeView";
import { Link } from "react-router-dom";
import Login from './components/LoginPage'
import SignUp from './components/SignUpPage'
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState (false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Recipe.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/recipes">View Recipes</NavDropdown.Item>
              <NavDropdown.Item href="/addrecipe">
                Create Recipes
              </NavDropdown.Item>
              <NavDropdown.Item href="/favorites">Favorites</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Followers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Button onClick={handleShow}> Login </Button> {' '}
              <Button onClick={handleShowSignUp}> Sign Up </Button>
              <SignUp handeClose={handleCloseSignUp} show={showSignUp}/>
              <Login handleClose={handleClose} show={show}/>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div></div>
      <div>
        <Switch>
          <Route exact path="/profile" component={ProfileView} />
          <Route exact path="/recipes" component={RecipesView} />
          <Route exact path="/favorites" component={FavoritesView} />
          <Route exact path="/addrecipe" component={AddRecipeView} />
          <Route exact path="/home" component={HomeView} />
        </Switch>
      </div>
    </div>
  );
}

export default Navigation;
