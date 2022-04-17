import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './/Header.css'

const Header = () => {
    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container className='nav-container'>
                    <div>  <Navbar.Brand as={Link} to="/">Idle Trainer</Navbar.Brand></div>
                    <div>  <Nav className="navbar me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                    </Nav></div>
                </Container>
            </Navbar>

        </>

    );
};

export default Header;