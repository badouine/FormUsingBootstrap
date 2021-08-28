/* eslint-disable no-unused-vars */
import { render } from "@testing-library/react";
import React, { Component } from "react";
import { FormGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

class SimpleForm extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="Form.Name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>
          <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default SimpleForm;
