import React from "react";
import { Form, Button, Col } from "react-bootstrap";

export const AddRecipeView = (props) => {

  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
        <Col md={4}>
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" placeholder="Recipe" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicImage">
          <Col md={4}>
          <Form.File id="exampleInput" type="image" label="Insert image"/>
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Col md={4}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" placeholder="Description" />
          </Col>
        </Form.Group>

        <Form.Group controlId="formBasicText">
        <Col md={4}>
          <Form.Label> Steps </Form.Label>
          <Form.Control type="text" placeholder= "Steps"/>
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
