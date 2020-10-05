import React from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import './Add.css'




export default function AddLink() {
    return(
        <div  className="addLink">
            <Alert variant="success" className="alertList">that links remove success</Alert>
            <h3>Add New Link</h3>
            <hr/>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Link Name :</Form.Label>
                    <Form.Control type="email" placeholder="Enter link" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Link URL :</Form.Label>
                    <Form.Control type="password" placeholder="Enter URL" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>



    );
}