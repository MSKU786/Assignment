import React from 'react';
import "./main.css";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

function Main(props) {
    return (
        <div>
            <div className="container m-5 w-50">
                <h1 className="display-4 m-5">Cari Cari</h1>
                <h5 className="m-5">Life from you sofa to yours. Get Closer to your favourite artists, and never miss out</h5>
            </div>
            <Container id="container" >
                <Row className = "pl-5 ">
                    <Col>
                        <Card style={{ width: '200px', height: '200px' }} className="rounded-circle border-danger">
                            <ListGroup style={{ width: '100px', height: '150px' }}className="list-group-flush mt-3 ml-5 ">
                                <ListGroupItem className="border-0 d-flex justify-content-center">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '200px', height: '200px' }} className="rounded-circle border-">
                            <ListGroup style={{ width: '100px', height: '150px' }} className="list-group-flush m-3 ml-5">
                                <ListGroupItem className="border-0 d-flex justify-content-center">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '200px', height: '200px' }} className="rounded-circle">
                            <ListGroup style={{ width: '100px', height: '150px' }} className="list-group-flush m-3 ml-5">
                                <ListGroupItem className="border-0 d-flex justify-content-center">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '200px', height: '200px' }} className="rounded-circle">
                            <ListGroup style={{ width: '100px', height: '150px' }} className="list-group-flush m-3 ml-5">
                                <ListGroupItem className="border-0 d-flex justify-content-center">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Main;