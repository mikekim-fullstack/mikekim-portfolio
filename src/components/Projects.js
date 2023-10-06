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

import gymImg1 from '../assets/img/gymeagle1.jpg'
import gymImg2 from '../assets/img/gymeagle2.jpg'
import gymImg3 from '../assets/img/gymeagle3.jpg'
import gymImg4 from '../assets/img/gymeagle4.jpg'
import gymImg5 from '../assets/img/gymeagle5.jpg'
import gymImg6 from '../assets/img/gymeagle6.jpg'
import gymImg7 from '../assets/img/gym.png'

import ProjectCards from './ProjectCards';
import colorSharp2 from "../assets/img/color-sharp2.png";
const Projects = () => {
    const projects1 = [
        {
            id: 1,
            title: "LaLaSol Bootcamp LMS",
            description: ["An educational platform that allows teachers to easily create courses by assembling pre-built components with a preview result."],
            imgUrl: projImg1,
            link: 'https://lalasol-bootcamp.web.app/'
        },
        {
            id: 2,
            title: "Freelancer Work ",
            description: [
                'Client Side (ReactJS): Managed states using Redux and ReduxJS/Toolkit. Fetched data through Axios.',
                'Server Side: Built endpoint API with Django (Python) RESTful framework. Implemented an authentication system for login. Used PostgreSQL for the database.',
                'Server Side: Allowed students to practice JavaScript, HTML, and CSS through Node.js.',
                'Deployment: Server side - railway.app.',
                'Deployment: Client side - Firebase@Google'
            ],
            imgUrl: projImg2,
            type: 'long',
        },
        {
            id: 3,
            title: "Easy Course Access Control",
            description: ["Control access limitations for students.", "Easily navigate courses."],
            imgUrl: projImg3,
        },
        {
            id: 4,
            title: "Practice JavaScript",
            description: ["Allow students to practice their own code and manage their exercises."],
            imgUrl: projImg4,
        },
        {
            id: 5,
            title: "Practice Building Websites",
            description: ["Provide a server side for practicing website development."],
            imgUrl: projImg5,
        },
        {
            id: 6,
            title: "Key Feature #1",
            description: ["Allow teachers to create, update, and delete courses, chapters, and content. Review changes instantly."],
            imgUrl: projImg6,
        },
        {
            id: 7,
            title: "Key Feature #2",
            description: ["Provide pre-built components such as Main Title, Sub Title, Paragraph, Q&A, Note, Code, Image, YouTube Link, PDF file, HTML file, GitHub Link, and more."],
            imgUrl: projImg7,
        },
    ];

    const projects2 = [
        {
            id: 1,
            title: "E-commerce",
            description: [
                'Client Side (ReactJS): Managed states using Redux and ReduxJS/Toolkit. Fetched data through Axios.',
                'Server Side: Built endpoint API with Strapi and an authentication system for login.',
                'DataBase: Used PostgreSQL on Railway.app server, Image CDN: Used AWS S3 server',
                'Payment: Stripe connected with Strapi',
                'Deployment: Server side - railway.app.',
                'Deployment: Client side - Firebase@Google'
            ],
            imgUrl: gymImg1,
            link: 'https://gymeagle-575e4.web.app//'
        },
        {
            id: 2,
            title: "Categories",
            description: [
                "Search by subcategories",
                "Filter by price",
                "Sorted by price"
            ],
            imgUrl: gymImg6,

        },
        {
            id: 3,
            title: "Detail product page",
            description: [
                "Show different images",
                "Detail information",
                "Add to the cart"
            ],
            imgUrl: gymImg5,
        },
        {
            id: 4,
            title: "Cart Page",
            description: [
                "Show items in customer cart",
                "Remove functionality",
                "Reset functionality"
            ],
            imgUrl: gymImg3,
        },
        {
            id: 5,
            title: "Checkout page",
            description: [
                "Check out items",
                "Connected to Stripe payment process",
            ],
            imgUrl: gymImg2,
        },
        {
            id: 6,
            title: "Authentication Page",
            description: [
                "Log In process",
                "Sing Up process",
            ],
            imgUrl: gymImg4,
        },
        {
            id: 7,
            title: "Fully Responsive Design",
            description: [

            ],
            imgUrl: gymImg7,
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (swiperInstance) => {
        if (swiperInstance === null) return;
        const currentSlide = swiperInstance?.activeIndex;
        // console.log('swiper', currentSlide)
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
                                            projects1.map((project, cardIndex) => {
                                                return (
                                                    <SwiperSlide key={cardIndex} className={`project-card ${cardIndex % 2 ? 'active' : ''}`}>
                                                        <ProjectCards key={project.id} {...project} />

                                                    </SwiperSlide>
                                                )
                                            })
                                        }

                                    </Swiper>

                                </Tab.Pane>
                                <Tab.Pane eventKey={'second'} >
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
                                            projects2.map((project, cardIndex) => {
                                                return (
                                                    <SwiperSlide key={cardIndex} className={`project-card ${cardIndex % 2 ? 'active' : ''}`}>
                                                        <ProjectCards key={project.id} {...project} />

                                                    </SwiperSlide>
                                                )
                                            })
                                        }

                                    </Swiper>
                                </Tab.Pane>
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