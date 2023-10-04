import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Tab, Tabs, Nav } from 'react-bootstrap'
import './Projects.css'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import projImg1 from "../assets/img/sunrise1.jpg";
import projImg2 from "../assets/img/sunrise2.jpg";
import projImg3 from "../assets/img/sunrise8.jpg";
import projImg4 from "../assets/img/sunrise4.jpg";
import projImg5 from "../assets/img/sunrise5.jpg";
import projImg6 from "../assets/img/sunrise6.jpg";
import projImg7 from "../assets/img/sunrise7.jpg";
import ProjectCards from './ProjectCards';
import colorSharp2 from "../assets/img/color-sharp2.png";
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "LaLaSol Bootcamp LMS",
            description: ["LaLaSol Eduction platform which allows teacher create courses easily by clicking pre-built components with preview result."],
            imgUrl: projImg1,
            link: 'https://lalasol-bootcamp.web.app/'

        },
        {
            id: 2,
            title: "Freelancer work(7month)",
            description: [

                'Server Side(Django RESTful API): Built endpoint API through REST framework. OAuth System for Login. Database with PostgreSQL',
                'Client Side(ReactJS): Managed states by Redux and Reduxjs/toolkit. Fetched data through Axios.',
                'Deploy: Server side - railway.app. Client side - firebase@google'
            ],
            imgUrl: projImg2,
            type: 'long',
        },
        {
            id: 3,
            title: "Easy access course control",
            description: ["Control access limitations.", "Easy navigagte courses."],
            imgUrl: projImg3,
        },
        {
            id: 4,
            title: "Business Startup 4",
            description: ["Design & Development"],
            imgUrl: projImg4,
        },
        {
            id: 5,
            title: "Business Startup 5",
            description: ["Design & Development"],
            imgUrl: projImg5,
        },
        {
            id: 6,
            title: "Business Startup 6",
            description: ["Design & Development"],
            imgUrl: projImg6,
        },
        {
            id: 7,
            title: "Business Startup 7",
            description: ["Design & Development"],
            imgUrl: projImg7,
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (swiperInstance) => {
        if (swiperInstance === null) return;
        const currentSlide = swiperInstance?.activeIndex;
        console.log('swiper', currentSlide)
        setCurrentIndex(currentSlide)
    }
    return (
        <section id='projects' className='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='h2-title'>Featured Projects</h2>
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br></br>Atque distinctio ducimus corporis eum, exercitationem, obcaecati quae commodi perspiciatis ipsum voluptate hic. Et quia iste incidunt veniam cumque distinctio nostrum quidem?</p> */}

                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant="pills" className='nav-pills mb-5 justyfy-conent-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first' title='Bootcamp'>LaLaSol</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" title='E-commerce'>GymEagle</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab 3</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content className='mt-5'>
                                <Tab.Pane eventKey={'first'}>
                                    <Swiper className='project-swiper'
                                        initialSlide={currentIndex}
                                        onActiveIndexChange={updateIndex}
                                        grabCursor
                                        spaceBetween={32}
                                        slidesPerView={1}
                                        // loop={true}
                                        pagination={{
                                            clickable: true,
                                            // type: 'progressbar',
                                        }}
                                        navigation={true}
                                        modules={[Pagination, Navigation]}

                                        breakpoints={{
                                            576: {
                                                slidesPerView: 1,
                                            },
                                            768: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                            1100: {
                                                slidesPerView: 1,
                                                spaceBetween: 20,
                                            },
                                        }}
                                    >
                                        {
                                            projects.map((project, cardIndex) => {
                                                return (
                                                    <SwiperSlide key={cardIndex} className={`project-card ${cardIndex % 2 ? 'active' : ''}`}>
                                                        <ProjectCards key={project.id} {...project} />

                                                    </SwiperSlide>
                                                )
                                            })
                                        }

                                    </Swiper>

                                    {
                                        // projects.map((project) => (<ProjectCards key={project.id} {...project} />))
                                    }

                                </Tab.Pane>
                                <Tab.Pane eventKey={'second'} >

                                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque esse porro corporis iusto alias labore neque possimus eum at.`</Tab.Pane>
                                {/* <Tab.Pane eventKey={'third'} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ipsam accusamus cupiditate libero quaerat suscipit repellendus placeat eveniet odit nulla.</Tab.Pane> */}
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