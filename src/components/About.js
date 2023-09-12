import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ReadMore from './ReadMore'
import './About.css'
const About = () => {
    const content = (
        <div>
            <p>With a career spanning over two decades as a Robotics Software Engineer, my journey has been nothing short of extraordinary, from orchestrating space robot missions to revolutionizing the realm of medical robotics. Amid this voyage, I witnessed the remarkable evolution of online platforms, driven by the transformative force of AI, and recognized it as the undeniable future. This realization ignited a new passion within me, propelling me towards an exciting career transition.</p>
            <p>I dedicated six months to intensive training at the <a href='https://www.seytech.co/' target='_blank'>Seytech bootcamp</a>, where I acquired the skills necessary to excel in the dynamic field of front-end development. Armed with this newfound knowledge, I embarked on a freelancing venture <a href='https://lalasol-bootcamp.web.app/' target='_blank'>LalaSol project</a> that would forever alter my perspective on technology and its endless possibilities.
                My freelance journey not only enhanced my technical skills but also strengthened my ability to communicate effectively, meet client expectations, and deliver top-notch solutions within deadlines.</p>
            <p>Now, I stand poised to embrace my new role as a Front End Developer. I am irresistibly drawn to companies that value innovation, foster a culture of continuous learning, and thrive on collaborative teamwork. My journey in front-end development has just begun, and I am eager to contribute my skills and passion to exciting, forward-thinking projects.</p>
            <p>Please explore my portfolio to gain insights into my work on this transformative project. Feel free to reach out to me at the <a href='#contact'>contact section</a> for any inquiries or opportunities for collaboration. I am excited about the prospect of becoming a pivotal part of the next wave of technological evolution and contributing to the success of innovative endeavors.</p>
            <p className='thanks'>Thank you for visiting my portfolio, and I look forward to connecting with you.</p>
        </div>
    )
    return (
        <section id='about' className='about'>
            <Container>
                <Row>
                    <Col className='col'>
                        <h2>About me</h2>
                        <ReadMore content={content} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About