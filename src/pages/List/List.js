import React, {useState, useEffect} from 'react';
import './List.css';
import {Modal, Button, Alert, DropdownButton, Dropdown, Card, Row, Col} from "react-bootstrap";
import ListItem from "../../components/ListItem/ListItem";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function List() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (


        <div>


            <Alert variant="success" className="alertList">that links remove success</Alert>
            <div className="buttons-area">
                <Link to={"/addForm"}>
                    <Button variant="outline-success"><strong>Submit Link</strong> <i
                        className="fas fa-plus"></i></Button>

                </Link>

                <DropdownButton id="dropdown-basic-button" title="Order By">
                    <Dropdown.Item href="#/action-1">Most Voted (A-Z)</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Less Voted (Z-A)</Dropdown.Item>
                </DropdownButton>
            </div>


            <ListItem itemDetail={{point: 0, name: "Hacker", url: "https://aaaa.com"}}/>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Link</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modalBody"><h5>Do You Want to Remove</h5><h3>Reddit</h3></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Remove
                    </Button>
                    <Button variant="warning" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>

    )

}
   









