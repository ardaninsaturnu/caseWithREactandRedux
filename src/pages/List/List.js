import React,{useState,useEffect} from 'react';
import './List.css';
import { Modal,Button,Alert,DropdownButton,Dropdown,Card,Row,Col } from "react-bootstrap";


export default function List(){


  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
 
    return(


  <div>


      <Alert variant="success" className="alertList">that links remove success</Alert>
<div className="buttons-area">

    <Button variant="outline-success"><strong>Submit Link</strong> <i className="fas fa-plus"></i></Button>

    <DropdownButton id="dropdown-basic-button" title="Order By">
        <Dropdown.Item href="#/action-1">Most Voted (A-Z)</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Less Voted (Z-A)</Dropdown.Item>
    </DropdownButton>
</div>

      <Card className="cardBody">
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <div className="pointBox">
                            <h3>8</h3>
                            <p>Points</p>
                        </div>
                    </Col>
                    <Col xs={5} className="align-items-center justify-content-center">
                        <Card.Title>Hacker News</Card.Title>
                        <Card.Text>(https://www.news.ycombinator.com)</Card.Text>
                    </Col>
                    <Col xs={3}>
                        <Row>
                            <Col>
                                <button className="voteButton">
                                    <i className="fas fa-angle-up angle"></i>
                                    <p>Up Vote</p>
                                </button>

                            </Col>
                            <Col>
                                <button className="voteButton">
                                    <i className="fas fa-angle-down angle"></i>
                                    <p>Down Vote</p>
                                </button>

                            </Col>
                        </Row>


                    </Col>
                    <Col xs={1} className="d-flex justify-content-end align-items-center">
                        <Button className="removeButton" variant="outline-danger" onClick={handleShow}><i className="fas fa-minus"></i></Button>
                    </Col>
                </Row>
            </Card.Body>

      </Card>




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
   









