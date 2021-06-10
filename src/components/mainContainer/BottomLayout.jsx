import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import "./main.css";

function BottomLayout(props) {
    return (
        <>
            <Container id="container2">
                <Row className="d-flex justify-content-between border pl-3 mb-5">
                    <Col md={4}>Upcoming Shows </Col>
                    <Col md={1}>View all</Col>
                </Row>
                <Row className = "pl-3">
                    <Col>
                        <Card style={{ width: '250px' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '235px'}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOaW0rHx52VTsLKPX6t4z8bQRUXyrhkL-4gg&usqp=CAU" />
                            <div id="singerTag">
                                <p > Folk </p>
                            </div>
                            <Card.Body id="singerTitle">
                                <Card.Title id="singerTitle">Benny Dayal</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        More Info
                                    </span>
                                    <span>
                                        list
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '250px' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '235px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtxPdsWkHnB8yQdhnHidxI9iifgH84Cj9KA&usqp=CAU" />
                            <div id="singerTag">
                                <p > Folk </p>
                            </div>
                            <Card.Body id="singerTitle">
                                <Card.Title id="singerTitle">Vijay Yesudas</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        More Info
                                    </span>
                                    <span>
                                        list
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '250px' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '235px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2SMMjjVfVfkAwec0Sn19aXvDPjVD8TcVJA&usqp=CAU" />
                            <div id="singerTag">
                                <p > Folk </p>
                            </div>
                            <Card.Body id="singerTitle">
                                <Card.Title id="singerTitle">Andrea Jeremiah</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        More Info
                                    </span>
                                    <span>
                                        list
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '250px' }}>
                            <Card.Img variant="top" style={{ width: '100%', height: '235px'}} src="data:image/jpeg;base64,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" />
                            <div id="singerTag">
                                <p > Folk </p>
                            </div>
                            <Card.Body id="singerTitle">
                                <Card.Title id="singerTitle">Shilpa Rao</Card.Title>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        More Info
                                    </span>
                                    <span>
                                        list
                                    </span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container id="container2">
                <Row className="d-flex justify-content-between border pl-3 mb-5">
                    <Col md={4}>Reviews </Col>
                    <Col md={1}>View all</Col>
                </Row>
                <Row>
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <Card style={{ width: '350px' }}>
                                <Card.Body>
                                    <div className="d-flex justify-content-start" id= "profilePhotoReview">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                                        alt="" className="profilePhoto" />
                                        <div>
                                            <Card.Title>Hellen Jummy</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">PALO ALTO, CA</Card.Subtitle>
                                        </div>
                         
                                    </div>
                                    
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                               
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Card style={{ width: '350px' }}>
                                <Card.Body>
                                    <div className="d-flex justify-content-start" id= "profilePhotoReview">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                                        alt="" className="profilePhoto" />
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">PALO ALTO, CA</Card.Subtitle>
                                        </div>
                         
                                    </div>
                                    
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                               
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Card style={{ width: '350px' }}>
                                <Card.Body>
                                    <div className="d-flex justify-content-start" id= "profilePhotoReview">
                                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" 
                                        alt="" className="profilePhoto" />
                                        <div>
                                            <Card.Title>Hellen Jummy</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">PALO ALTO, CA</Card.Subtitle>
                                        </div>
                         
                                    </div>
                                    
                                    <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Card.Text>
                               
                                </Card.Body>
                            </Card>
                        </ListGroup.Item>
                    </ListGroup>
                </Row>
            </Container>
        </>
    );
}

export default BottomLayout;