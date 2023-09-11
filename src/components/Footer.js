import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import logoImg from '../assets/img/logo.svg'
import linkedin from '../assets/img/nav-icon1.svg'
import leetCode from '../assets/img/code-solid.svg'
import github from '../assets/img/github.svg'
function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row className='row'>
                    <Col sm={6} style={{ border: '0px solid white', textAlign: 'center', alignSelf: 'center' }}>
                        <img src={logoImg} alt='logo image' />
                    </Col>
                    <Col sm={6} className='text-center ' style={{ border: '0px solid white', padding: 0, }}>
                        <div className='social-icon' style={{ border: '0px solid white', paddingTop: '10px' }}>
                            <a href='#'><img src={github} alt='github' /></a>
                            <a href='#'> <img src={linkedin} alt='linkedin' /></a>
                            <a href='#'><img src={leetCode} alt='leetCode' /></a>
                        </div>
                        <p>All Right Reserved Mike Kim @CopyRight 2023.</p>
                    </Col>
                </Row>

            </Container>
        </footer >
    )
}

export default Footer