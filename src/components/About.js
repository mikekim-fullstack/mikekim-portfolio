import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'
const About = () => {
    return (
        <section id='about' className='about'>
            <Container>
                <Row>
                    <Col>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veritatis, cupiditate minima ad consequatur aut quisquam obcaecati consectetur ab id ratione officiis veniam voluptates tempore quas, illo dicta dolorem debitis sunt labore in. Quaerat iusto quod ad et, accusamus fugiat, vel ducimus dolore reprehenderit placeat assumenda minima aut, animi sapiente?</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About