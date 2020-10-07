import React from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import './Add.css'
import {Link} from 'react-router-dom';




export default function AddLink() {

    let handleSubmit;
    handleSubmit = (event) => {
        event.preventDefault()

       console.log(event.target.title.value)
       console.log(event.target.url.value)

        let linkList = localStorage.getItem("linkList")
        linkList = JSON.parse(linkList)

        linkList.list.push({

            'title': event.target.title.value,
            'url': event.target.url.value,
            'point': 0
        })

        localStorage.setItem("linkList",JSON.stringify(linkList))

    }

    return(
        
        <div  className="addLink">

            <Alert variant="success" className="alertList">that links remove success</Alert>
            <h3>Add New Link</h3>
            <hr/>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Link Name :</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter Title" required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Link URL :</Form.Label>
                    <Form.Control name="url" type="url" placeholder="Enter URL" required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to={"/"}>
                    <Button variant="danger">
                        Cancel
                    </Button>
                </Link>

            </Form>

        </div>



    );
}