import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState, useEffect } from 'react'
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const onScroll = () => {
            let isScrolled = window.scrollY > 50 ? true : false
            setScrolled(isScrolled)
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])
    return (
        <Navbar expand="sm" className={scrolled ? 'scroll' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={''} alt='github' /></a>
                            <a href='#'><img src={''} alt='linkedin' /></a>
                            <a href='#'><img src={''} alt='leetcode' /></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')} >
                            Let's Connect
                        </button>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar