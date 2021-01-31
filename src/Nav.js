import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Modal,
} from "react-bootstrap";
import { Switch, Route} from "react-router-dom";
import { AddRecipeView } from "./views/AddRecipeView";
import { FavoritesView } from "./views/FavoritesView";
import { ProfileView } from "./views/ProfileView";
import { RecipesView } from './views/RecipesView';
import { HomeView } from "./views/HomeView";
import { Link, Redirect } from "react-router-dom";
import Login from './components/LoginPage'
import SignUp from './components/SignUpPage'
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from './redux/reducers'
import { sessionCheck } from './redux/reducers'

const requireLogin = (loggedIn, redirect="/home") => Comp => props => loggedIn ? <Comp {...props} /> : <Redirect to={redirect} />
 
function Navigation() {
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);

  const { isLoggedIn, username } = useSelector(({ isLoggedIn, user: { username }}) => ({ isLoggedIn, username }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(sessionCheck())
  }, [])

  const authorize = requireLogin(isLoggedIn)

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">Recipe.io</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
          
          {
            isLoggedIn && (
              <NavDropdown title={`Welcome Back, ${username}`} id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/recipes">View Recipes</Link></NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/addrecipe">Create Recipes</Link>
                </NavDropdown.Item>
                <NavDropdown.Item><Link to="/favorites">Favorites</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to="/profile">Profile</Link></NavDropdown.Item>
                <NavDropdown.Item>Followers</NavDropdown.Item>
              </NavDropdown>
            )
          }
            
          </Nav>
          <Nav className="justify-content-end">
            {
              !isLoggedIn ? (
                <Nav.Item>
                  <Button onClick={handleShow}> Login </Button> {' '}
                  <Button onClick={handleShowSignUp}> Sign Up </Button>
                  <SignUp handleClose={handleCloseSignUp} show={showSignUp}/>
                  <Login handleClose={handleClose} show={show}/>
                </Nav.Item>
              ) : (
                <Nav.Item>
                  <Button onClick={() => dispatch(logoutUser())}> Logout </Button>
                </Nav.Item>
              )
            }
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div></div>
      <div>
        
        <Switch>
          <Route exact path="/profile" component={authorize(ProfileView)} />
          <Route exact path="/recipes" component={RecipesView} /> {/* TODO: render Recipe from redux store based on ID */}
          <Route exact path="/favorites" component={authorize(FavoritesView)} />
          <Route exact path="/addrecipe" component={authorize(AddRecipeView)} />
          <Route exact path="/home" component={HomeView} />
        </Switch>
       
      </div>
    </div>
  );
}

export default Navigation;
