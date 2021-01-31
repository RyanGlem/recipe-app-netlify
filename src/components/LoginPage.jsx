import React, {useState} from "react"
import { useDispatch, useSelector } from 'react-redux'
import {Modal, Form, Button} from 'react-bootstrap'
import { loginUser } from '../redux/reducers'
import { validate } from 'validate.js'


function Login({ show, handleClose }) {

    const [validated, setValidated] = useState(false)
    const [validEmail, setValidEmail] = useState(true)
    const [usernameEmail, setUser] = useState('')
    const [password, setPassword] = useState('')
    const loginSuccess = useSelector(state => !state.loginError)
    const dispatch = useDispatch()
    const isEmail = usernameEmail.includes('@') 

    const handleEmailUser = val => {
      if (isEmail) {
        setValidEmail(
          !validate({ value: val }, {
            value: {
              email: true
            }
          }) ?? false
        )
      }
      setUser(val)
    }

    const handleSubmit = event => {
      const form = event.currentTarget
      event.preventDefault()
      event.stopPropagation()

      console.log('ValidJS: ', !validEmail)

      if (!form.checkValidity() || (isEmail && !validEmail)) {
        console.log('Invalid')
        setValidEmail(false)
      } else {
        console.log('Form valid, submitting...')
        setValidEmail(true)
        dispatch(loginUser({
          [isEmail ? 'email' : 'username']: usernameEmail,
          password
        }))
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
                <Form.Label>{isEmail ? 'Email' : 'Username or Email'}</Form.Label>
                <Form.Control isInvalid={isEmail && !validEmail} type='text' placeholder="Username/Email" value={usernameEmail} onChange={e => handleEmailUser(e.target.value)} required/>
                <Form.Control.Feedback type="invalid"  >{isEmail ? 'Invalid Email' : 'Username or Email Required' }</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required/>
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