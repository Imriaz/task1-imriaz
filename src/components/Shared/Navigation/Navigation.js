import React from 'react';
import './Navigation.css';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Navigation = () => {
    return (
        <div>
            <Navbar className='navbar-color' bg='light' collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img className='Logo' src={logo} alt='' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Places</Nav.Link>
                            <Nav.Link href="#action3">Mountain</Nav.Link>
                            <Nav.Link href="#action4">Contact Us</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default Navigation;