import React, {Component, useState} from "react"
import {Modal, Form, Button} from 'react-bootstrap'
import {createUser} from "../redux/reducers"
import {connect} from 'react-redux'

class SignUp  extends Component {

  constructor (props) {
    super(props)
    this.state = {
      show: false,
      handleClose: true
    }
  }

    componentDidMount () {
        this.props.createUser()
    }

    handleShow = () => {

    }

    render () {
       
    return (  
        <Modal show={false} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.createUser()}>
            <Form.Group controlId="formBasicText1">
                <Form.Label> First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" required/>
                <Form.Control.Feedback type="invalid" >First Name Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicText2">
                <Form.Label> Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" required/>
                <Form.Control.Feedback type="invalid" >Last Name Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicText3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" required/>
                <Form.Control.Feedback type="invalid" >Username Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" placeholder="Email" required/>
                <Form.Control.Feedback type="email" >Email Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label> New Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" required/>
                <Form.Control.Feedback type="invalid" >Password Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label> Enter Password Again </Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
                <Form.Control.Feedback type="invalid" >Password Required</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                   Submit
               </Button>
            </Form>
          </Modal.Body>
        </Modal>
        )
    }
}
const mapState = (state) => {
    return {
        newUser: state.newUser,
    }
}

// Map dispatch to props
const mapDispatch = (dispatch) => {
    return {
        createUser: (body) => dispatch(createUser(body)),
    }
}

export default connect(mapState, mapDispatch)(SignUp);