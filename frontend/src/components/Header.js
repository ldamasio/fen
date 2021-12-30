import React from 'react'

import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'



function Header() {
    return (
      <header>
            <Navbar expand="lg" collapseOnSelect>

                <Container>


                    <Nav.Link href="#contato">Contato</Nav.Link>

                    <LinkContainer to='/'>
                      <Navbar.Brand>
                        <img height="60px" src="https://www.fenixespaço.com.br/static/fenix.png" alt="Espaço Fênix" />
                      </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                          <Nav.Link href="#oquefazemos">O QUE FAZEMOS</Nav.Link>
                          <Nav.Link href="#endereco">ENDEREÇO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
