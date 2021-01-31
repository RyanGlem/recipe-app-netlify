import React, { useRef, useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { createRecipe } from '../redux/reducers'
import { useDispatch } from 'react-redux'

export const AddRecipeView = (props) => {

  const formRef = useRef()
  const [validated, setValidated] = useState(false)
  const dispatch = useDispatch()

  const handleSubmit = event => {
    const form = event.currentTarget
    event.preventDefault()
    event.stopPropagation()
    if (!form.checkValidity()) {
      
      console.log('No valid')
    } else {
      console.log('Valid')
      const formData = new FormData(event.target)
      for (const entry of formData.entries()) {
        console.log(entry);
      }

      dispatch(createRecipe(formData))
    }

    setValidated(true)
  }


  return (
    <div>
      <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicText">
        <Col md={4}>
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control name="name" type="text" placeholder="Recipe" required/>
          <Form.Control.Feedback type="invalid" >Title Required</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Col md={4}>
          <Form.File id="exampleInput" type="image" name="imageFile" label="Insert image"/>
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Col md={4}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" name="description" required/>
          <Form.Control.Feedback type="invalid" >Description Required</Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Col md={4}>
          <Form.Label> Steps </Form.Label>
          <Form.Control type="text" as="textarea" placeholder="Steps" name="steps" required/>
          <Form.Control.Feedback type="invalid" >Steps Required</Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Col md={4}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Col>
      </Form>
    </div>
  );
};

export default AddRecipeView;
