import React, {Component, useState, useEffect} from "react"
import {Modal, Form, Button} from 'react-bootstrap'
import {createUser} from "../redux/reducers"
import {useDispatch} from 'react-redux'
import { validate } from 'validate.js'

const SignUp = ({ show, handleClose }) => {
  const [validated, setValidated] = useState(false)
  const [firstName, setFName] = useState('')
  const [lastName, setLName] = useState('')
  const [username, setUName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setConfirmPass] = useState('')
  const[equalPasswords, setPassEq] = useState(true)
  const dispatch = useDispatch()


  const checkPasswords = () => setPassEq(!(validate({
      passwordConfirm, password
    },
    {
    passwordConfirm: {
      equality: "password"
    }
  }) ?? false))

  const handleSubmit = event => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    if (!form.checkValidity() || !equalPasswords) {
      
      console.log('No valid')
    } else {
      console.log('Valid')
      dispatch(createUser({ firstName, lastName, username, email, password }))
    }

    setValidated(true)
  }

  useEffect(() => {checkPasswords()}, [password, passwordConfirm])

  useEffect(() => {
    console.log('EQ passwords: ', equalPasswords)
  }, [equalPasswords])

    return (  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicText1">
                <Form.Label> First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" value={firstName} onChange={e => setFName(e.target.value)} required/>
                <Form.Control.Feedback type="invalid" >First Name Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicText2">
                <Form.Label> Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={e => setLName(e.target.value)} required/>
                <Form.Control.Feedback type="invalid" >Last Name Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicText3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} onChange={e => setUName(e.target.value)} required/>
                <Form.Control.Feedback type="invalid" >Username Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label> Email </Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <Form.Control.Feedback type="invalid" >Email Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label> Password</Form.Label>
                <Form.Control type="password" placeholder="New Password" value={password} onChange={e => {setPassword(e.target.value)}} required/>
                <Form.Control.Feedback type="invalid" >Password Required</Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label> Confirm Password </Form.Label>
                <Form.Control isInvalid={!equalPasswords} type="password" placeholder="Password" value={passwordConfirm} onChange={e => {setConfirmPass(e.target.value)}} required/>
                <Form.Control.Feedback type="invalid" >{!equalPasswords ? 'Passwords Must Match' : 'Password Required'}</Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                   Submit
               </Button>
            </Form>
          </Modal.Body>
        </Modal>
        )
    }


export default SignUp;