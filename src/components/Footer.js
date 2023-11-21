import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.css'
import logoImg from '../assets/img/logo.svg'
import linkedin from '../assets/img/nav-icon1.svg'
import leetCode from '../assets/img/code-solid.svg'
import github from '../assets/img/github.svg'
import IntersectionVisibility from './IntersectionVisibility'
function Footer() {
    return (
        <IntersectionVisibility>
            <footer className='footer'>
                <Container>
                    <Row className='row'>
                        {/* <Col sm={6} style={{ border: '0px solid white', textAlign: 'center', alignSelf: 'center' }}>
                        <img src={logoImg} alt='logo image' />
                    </Col> */}
                        <Col sm={12} className='text-center ' style={{ border: '0px solid white', padding: 0, }}>
                            <div className='social-icon' style={{ border: '0px solid white', paddingTop: '10px' }}>
                                <a href='https://github.com/mikekim-fullstack' target='_blank'><img src={github} alt='github' /></a>
                                <a href='https://www.linkedin.com/in/mike-kim-9a5b27271/' target='_blank'> <img src={linkedin} alt='linkedin' /></a>
                                {/* <a href='#'><img src={leetCode} alt='leetCode' /></a> */}
                            </div>
                            <p className='copyright'>All Right Reserved Mike Kim @Copyight 2023.</p>
                        </Col>
                    </Row>

                </Container>
            </footer >
        </IntersectionVisibility>
    )
}

export default Footer