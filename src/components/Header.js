import React from 'react';

import {
  Container, Form, Button, Navbar, Nav,
   NavDropdown,
   FormControl
} from 'react-bootstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Header = () => (
  <header>

        <Navbar bg="light" expand="lg">
        <Container>

         <Nav.Link className="font-weight-bold" href="/">
                  <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                </Nav.Link>
  <Navbar.Brand href="#home">Some Organisation</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Events</Nav.Link>
      <NavDropdown title="Learn" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Documentation</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Tutorials</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Courses</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
        </Container>
</Navbar>
  </header>
);

export default Header;
