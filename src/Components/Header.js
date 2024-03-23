import React from 'react';

import {Container, Nav, NavDropdown, Navbar} from "react-bootstrap"

const Header = () => {
  return (
    <>
    <Navbar className='navbar bg-slate-300'>
      <Container fluid>
        <Navbar.Brand href="#" className='ms-5'>Logod</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 me-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About US</Nav.Link>
            <Nav.Link href="#action2">List</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    </>
  );
};

export default Header;