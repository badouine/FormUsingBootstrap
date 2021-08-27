import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { FormGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


class SimpleForm extends Component {
    render(){
        return (
            <Container>
                <Form>
                    <Form.Group controlId="FormName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"/>
                    </Form.Group >
                </Form>
            </Container>
        );
    }
}

export default SimpleForm;