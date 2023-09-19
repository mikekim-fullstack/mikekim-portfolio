import React from 'react'
// import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
// import logo from '../assets/img/logo.svg'
import logo from '../assets/img/MikeKim-white.svg'
import title from '../assets/img/Front End Developer.svg'
import linkedin from '../assets/img/nav-icon1.svg'
import leetCode from '../assets/img/code-solid.svg'
import github from '../assets/img/github.svg'
import './NavBar.css'
const NavBar = () => {
    //const menuItemIds = ['home', 'about', 'skills', 'experience', 'education', 'projects', 'contact']
    const navLists = [
        {
            id: 1,
            icon: 'estate',
            title: 'Home',
            href: 'home',
        },
        {
            id: 2,
            icon: 'user',
            title: 'About',
            href: 'about',
        },
        {
            id: 3,
            icon: 'cog',
            title: 'Skills',
            href: 'skills',
        },
        {
            id: 4,
            icon: 'briefcase-alt',
            title: 'Experience',
            href: 'experience',
        },
        {
            id: 5,
            icon: 'university',
            title: 'Education',
            href: 'education',
        },
        {
            id: 6,
            icon: 'apps',
            title: 'Projects',
            href: 'projects',
        },

        {
            id: 7,
            icon: 'message',
            title: 'Contact',
            href: 'contact',
        },
    ]
    const [activeLink, setActiveLink] = useState(1)
    const [toggleShowMenu, setToggleShowMenu] = useState(false);
    const [scrolledTop, setScrolledTop] = useState(false)
    const [scrollDown, setScrollDown] = useState(false)
    const matches = useMediaQuery('(max-width: 768px)');
    let prevScrollY = 0
    useEffect(() => {
        const menuLists = []
        navLists.forEach((list) => menuLists.push(document.getElementById(list.href)))
        console.log(menuLists)

        const headNav = document.querySelector('.header-nav')
        const scrollEvent = () => {
            const scrollY = window.scrollY;
            if ((scrollY - prevScrollY) > 0) setScrollDown(true)
            else if ((scrollY - prevScrollY) < 0) setScrollDown(false)

            // console.log('scrollY', scrollY, 'dir', scrollY - prevScrollY)
            prevScrollY = scrollY
            let scrolled = (scrollY > 50) ? true : false
            setScrolledTop(scrolled)

            // ----------- Make the current section active in menu... ----------
            for (let i = menuLists.length - 1; i >= 0; i--) {
                if (scrollY >= (menuLists[i].offsetTop - 100)) {
                    setActiveLink(navLists[i].id)
                    break;
                }
            }

        }
        window.addEventListener('scroll', scrollEvent)
        return () => window.removeEventListener('scroll', scrollEvent)
    }, [])
    return (
        <header className={`header-nav ${scrolledTop && !matches ? 'scrolled' : ''} ${matches ? (scrollDown ? '' : 'hidden') : ''}`}>
            <nav className={`mk-navbar container`}>
                <a href="index.html" className="mk-navbar-logo">
                    <img src={logo} alt='logo' width={'100px'} />
                    <img src={title} alt='title' width={'100px'} />
                </a>
                <div className={`mk-navbar-menu ${toggleShowMenu ? 'show-menu' : ''}`}>
                    <ul className="mk-navbar-list grid">
                        {
                            navLists.map((list) => (
                                <li key={list.id} className="mk-navbar-item">
                                    <a href={`#${list.href}`} className={`mk-navbar-link ${activeLink === list.id ? 'active-link' : ''}`} onClick={() => setActiveLink(list.id)}>
                                        <i className={`uil uil-${list.icon} mk-navbar-icon`}></i>
                                        <span className='mk-navbar-name'>{list.title}</span>
                                    </a>
                                </li>
                            ))
                        }

                    </ul>
                    {/* <i className="uil uil-times nav-close" onClick={() => setToggleShowMenu(prev => !prev)}></i> */}
                </div>
                <div></div>
                {/* <div className={`mk-navbar-toggle`} onClick={() => setToggleShowMenu(prev => !prev)}>
                    <i className="uil uil-apps"></i>
                </div> */}
            </nav>
        </header>
    )
}

export default NavBar