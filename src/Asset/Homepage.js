import React from 'react';
import {Card, Container} from "react-bootstrap";
import logo from "../logo.svg"


const Homepage=()=> {
    return (
        <Container style={{marginTop:"2rem"}}>
            <Card border="light">
                <Card.Img variant="top" src={logo} style={{width:'100%', height:'20rem'}}/>
                <Card.Title className="text-primary">
                    <h1>Welcome to Quran App</h1>
                </Card.Title>
                <Card.Body>
                    <h4>Click the menu on top right to start reading.</h4>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Homepage;