import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';

const Navigation = () => {
    const {user,logOut} = UseAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="/home" className='text-dark'><span className='text-danger fw-bold'>PET.</span>Food</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" className='text-dark'>Home</Nav.Link>
              <Nav.Link as={Link} to="/About" className='text-dark'>About Us</Nav.Link>
              <Nav.Link as={Link} to="/MyOders" className='text-dark'>My Oders</Nav.Link>
              <Nav.Link as={Link} to="/Database" className='text-dark'>Database</Nav.Link>
            </Nav>
            <Nav>
            {
              (user?.email) ? <Link to="/login">
              <button onClick={logOut}>Log out</button>
            </Link> : <Link to="/login">
            <Nav.Link as={Link} to="/login" className='text-dark'>Login</Nav.Link>
            </Link>
            }
              <Nav.Link as={Link} to="/register" className='text-dark'>Register</Nav.Link>
              <Nav.Link eventKey={2} href="#memes" className='text-dark'>
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
       </Navbar>
        </div>
    );
};

export default Navigation;