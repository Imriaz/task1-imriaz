import React from 'react';
import './Navigation.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Navigation = () => {
    return (
        <section>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img className='Logo' src={logo} alt='' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 mx-4 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
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
        </section>

    );
};

export default Navigation;