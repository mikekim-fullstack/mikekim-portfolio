import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState, useEffect } from 'react'
// import logo from '../assets/img/logo.svg'
import logo from '../assets/img/MikeKim-white.svg'
import title from '../assets/img/Front End Developer.svg'
import linkedin from '../assets/img/nav-icon1.svg'
import leetCode from '../assets/img/code-solid.svg'
import github from '../assets/img/github.svg'
import './NavBar.css'
const NavBar = () => {
    // const [activeItem, setActiveItem] = useState('');// Scroll highlighting on menu items

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)
    const [collapsed, setCollapsed] = useState(false)

    const menuItemIds = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact']
    useEffect(() => {

    }, [])
    useEffect(() => {
        // Highlightening the menu items according to current scrolling position...
        const sectionOffsets = []
        for (const menuItemId of menuItemIds) {
            const ele = document.getElementById(menuItemId)
            sectionOffsets.push(ele)
        }

        const onScroll = () => {
            // When scroll start over 50px, handle nav properties...
            let isScrolled = window.scrollY > 50 ? true : false
            setScrolled(isScrolled)

            // Highlightening the menu items according to current scrolling position...
            for (let i = sectionOffsets.length - 1; i >= 0; i--) {
                if (window.scrollY >= sectionOffsets[i].offsetTop - 100) {
                    setActiveLink(menuItemIds[i]);
                    break;
                }
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (

        <Navbar expand="lg" className={(scrolled ? 'scrolled' : '')} >
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src={logo} alt='logo' width={'100px'} /> */}
                    <div className='logo'>
                        <img src={logo} alt='logo' width={'100px'} />
                        <img src={title} alt='title' width={'100px'} />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => {

                    const attToggler = document.querySelector('nav.navbar .navbar-toggler')
                    const att = document.querySelector('.navbar')
                    console.log(att)

                    // att.classList.add('mk-collapsed')
                    const attClass = attToggler.getAttribute('class')

                    if (!attClass.includes('collapsed')) {
                        att.removeAttribute('id', 'mk-collapsed')

                    }
                    else {
                        att.setAttribute('id', 'mk-collapsed')
                    }
                    setCollapsed(!attClass.includes('collapsed'))
                    console.log('att', att, attToggler.getAttribute('class').includes('collapsed'))

                }} >
                    <span className='navbar-toggler-icon' ></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'activated' : ''} >Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'activated' : ''} >About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'activated' : ''} >Skills</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'activated' : ''} >Experiences</Nav.Link>
                        <Nav.Link href="#education" className={activeLink === 'education' ? 'activated' : ''} >Educations</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'activated' : ''} >Projects</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'activated' : ''} >Contact</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src={github} alt='github' /></a>
                            <a href='#'><img src={linkedin} alt='linkedin' /></a>
                            <a href='#'><img src={leetCode} alt='leetcode' /></a>
                        </div>
                        {/* <button className='vvd' onClick={() => console.log('connect Navbar')} >
                            Let's Connect
                        </button> */}

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar