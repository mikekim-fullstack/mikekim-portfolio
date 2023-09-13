import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Tab, Tabs, Nav } from 'react-bootstrap'
import './Projects.css'
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import ProjectCards from './ProjectCards';
import colorSharp2 from "../assets/img/color-sharp2.png";
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Business Startup 1",
            description: "Design & Development",
            imgUrl: projImg1,

        },
        {
            id: 2,
            title: "Business Startup 2",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            id: 3,
            title: "Business Startup 3",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            id: 4,
            title: "Business Startup 4",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            id: 5,
            title: "Business Startup 5",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            id: 6,
            title: "Business Startup 6",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]
    return (
        <section id='projects' className='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Atque distinctio ducimus corporis eum, exercitationem, obcaecati quae commodi perspiciatis ipsum voluptate hic. Et quia iste incidunt veniam cumque distinctio nostrum quidem?</p>

                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className='nav-pills mb-5 justyfy-conent-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey={'first'}>
                                    {
                                        console.log('clicked the first tab')
                                    }
                                    <Row>
                                        {
                                            projects.map((project) => (<ProjectCards key={project.id} {...project} />))
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey={'second'} >
                                    {console.log('clicked the second tab')}
                                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque esse porro corporis iusto alias labore neque possimus eum at.`</Tab.Pane>
                                <Tab.Pane eventKey={'third'} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam accusamus cupiditate libero quaerat suscipit repellendus placeat eveniet odit nulla.</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>

            <img className='background-image-right' src={colorSharp2} />

        </section>
    )
}
export default Projects