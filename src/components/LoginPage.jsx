import React, {useState} from "react"
import {Modal, Form, Button} from 'react-bootstrap'


function Login({ show, handleClose }) {

    const [validated, setValidated] = useState(false)

    const handleSubmit = event => {
      const form = event.currentTarget
      if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
      }

      setValidated(true)
    }

    return (  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicText">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" required/>
                <Form.Control.Feedback type="invalid" >Username Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
                <Form.Control.Feedback type="invalid">Password Required</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                   Submit
               </Button>
            </Form>
          </Modal.Body>
        </Modal>
    )
}

export default Login