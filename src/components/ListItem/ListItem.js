import React,{useState,useEffect} from 'react';
import './ListItem.css';
import { Modal,Button,Alert,DropdownButton,Dropdown,Card,Row,Col } from "react-bootstrap";


export default function ListItem({itemDetail}){



  const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);


 
    return(


  <div>


      <Card className="cardBody">
          <Card.Body>
              <Row>
                  <Col xs={2}>
                      <div className="pointBox">
                          <h3>{itemDetail.point}</h3>
                          <p>Points</p>
                      </div>
                  </Col>
                  <Col xs={5} className="align-items-center justify-content-center">
                      <Card.Title>{itemDetail.name}</Card.Title>
                      <Card.Text>{itemDetail.url}</Card.Text>
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




</div>

        )
    
}
   









