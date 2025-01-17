import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
        <Container fluid>
            <LinkContainer to="/">
              <Navbar.Brand >ProShop</Navbar.Brand>
            </LinkContainer>
            
            
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link href="/login"><i className='fas fa-user'></i> Login</Nav.Link>
              </LinkContainer>
               
            </Nav>
        
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </header>
   )
}

export default Header
