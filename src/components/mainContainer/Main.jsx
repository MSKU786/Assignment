import React from 'react';
import "./main.css";
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import BottomLayout from './BottomLayout';

function Main(props) {
    return (
        <>
            <div className="container m-5 w-50" id="headingContainer">
                <h1 >Cari Cari</h1>
                <h5 >Life from you sofa to yours. Get Closer to your favourite artists, and never miss out</h5>
            </div>
            <Container id="containerMiddle" >
                <Row className = "pl-5 ">
                    <Col>
                        <Card  className="rounded-circle " id="likeContainer">
                            <ListGroup className="list-group-flush mt-3 ml-5 " id="listLikeContainer" >
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card  className="rounded-circle " id="likeContainer">
                            <ListGroup className="list-group-flush mt-3 ml-5 " id="listLikeContainer" >
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card  className="rounded-circle " id="likeContainer">
                            <ListGroup className="list-group-flush mt-3 ml-5 " id="listLikeContainer" >
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col>
                        <Card  className="rounded-circle " id="likeContainer">
                            <ListGroup className="list-group-flush mt-3 ml-5 " id="listLikeContainer" >
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Heart</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">0</ListGroupItem>
                                <ListGroupItem className="border-0 d-flex justify-content-center" id="listLikeContent">Label</ListGroupItem>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Main;