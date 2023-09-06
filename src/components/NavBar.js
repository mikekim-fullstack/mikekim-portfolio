import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.svg'
import linkedin from '../assets/img/nav-icon1.svg'
import leetCode from '../assets/img/code-solid.svg'
import github from '../assets/img/github.svg'
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
                    <img src={logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => setActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={github} alt='github' width='18px' style={{ fill: 'currentColor' }} /></a>
                            <a href='#'><img src={linkedin} alt='linkedin' /></a>
                            <a href='#'><img src={leetCode} alt='leetcode' width='25px' /></a>
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