import React from 'react';
import Logo from '../assets/logo_klb.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src={Logo}
                        alt='This is a logo of website'
                    />
                </Navbar.Brand>
            </Container>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                    <Nav className='nav'>
                    <Nav.Item>
                        < Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/producs">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav.Item>
                    </Nav>
            </Container>            
      </Navbar>
    );
}

export default Header;