import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Experience.css'
import Carousel from 'react-multi-carousel';
import TimeLineCard from './TimeLineCard'
const Experience = () => {
    const experienceData = [
        {
            id: 1,
            role: 'Fullstack Developer',
            company: 'LaLaSol',
            site: 'https://lalasol-bootcamp.web.app/',
            period: 'Jan. 2023 - Sep. 2023',
            description: 'LaLaSol Eduction platform which allows teacher create courses easily by clicking pre-built components with preview result.',
            responsibility: [
                'Freelancer work',
                'Server Side(Django): Built endpoint API through REST framework. OAuth System for Login. Database with PostgreSQL',
                'Client Side(ReactJS): Managed states by Redux and Reduxjs/toolkit. Fetched data through Axios.',
                'Deploy: Server side - railway.app. Client side - firebase@google'
            ]
        },
        {
            id: 2,
            role: 'Software Developer C++',
            company: 'THALES',
            site: 'https://www.thalesgroup.com/en/americas/canada',
            period: 'Sep. 2021 - May. 2022',
            description: 'THALES company located in Toronto Canada provides modern train signal system',
            responsibility: [
                'Tools developer for automated testing for London subway transit at Thales',

            ]
        },
        {
            id: 3,
            role: 'Senior Medical Robotics Engineer C++',
            company: 'MIRUS LLT',
            site: 'https://www.mirusmed.com/',
            period: 'Feb. 2019 - April. 2020',
            description: 'MIRUS company located in Atlanta USA dedicates the technologies for spin surgery including new implants and surgical robot. However I had to return to Canada because of COVID 19.',
            responsibility: [
                'Spine Surgical Robot Software development - FK, IK for Staubli Robot',
                'Real time communication for generated path-plan to Robot',
                'Simulator and Staubli Robot Server and Interface.',

            ]
        },
        {
            id: 4,
            role: 'Senior Medical Robotics Engineer C++',
            company: 'Lee Chun Tak Hospital',
            site: 'https://www.lct.co.kr/',
            period: '2014 - 2018',
            description: 'LTC hospital located in South Korea provides the knee replacement by robot',
            responsibility: [
                'Knee Replacement Software development - allowing physicians predefine the implant position and rotation of the femur and tibia and their simulation before the knee surgical robot performs surgeries.',
                '3D registration from patient to robot',
                'Upgraded RoboDoc robot system',
            ]
        },
        {
            id: 5,
            role: 'Founder & CEO/CTO',
            company: 'ROBOWARE',
            site: '#0',
            period: '2007 - 2014',
            description: 'ROBOWARE located in Seoul, Korea was to bring affordable personal robots to kids,educational fields and families',
            responsibility: [
                'Produced educational robot platforms',
                'Developed Robot Operating System',
            ]
        },
        {
            id: 6,
            role: 'Project Manager C++',
            company: 'WowWee',
            site: 'https://wowwee.com/',
            period: '2006 - 2008',
            description: 'WowWee Company was the world leading robotic toy company in Hong Kong',
            responsibility: [
                'Co-leading the couple of projects such as RSMedia and Elvis Presley Robot',
                'Managing production lines and developed embedded, motion generation S/W',
            ]
        }
        ,
        {
            id: 7,
            role: 'Researcher Engineer',
            company: 'MDRobotics(MDA)',
            site: 'https://mda.space/en/',
            period: '2001-2006',
            description: 'MDRobotics’ company located in Canada is the most famous space robot company in the world by providing SRMS, SSRMS and SPDM to NASA which were installed on ISS in space.',
            responsibility: [
                'Contributed the space robot real-time control system design & Robot arm simulation',
                'Participation in developing Canada Arm (SSRMS, SPDM)',
                'Participation in Hubble Telescope projects in NASA’s Goddard Space Flight Centre'
            ]
        }
    ]
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section id='experience' className='experience'>
            <Container>

                <h2>Experience</h2>
                <div className='parent-row'>
                    <div className='one-row'>

                        {
                            experienceData.map((data) => {
                                // console.log(data)
                                return (
                                    <TimeLineCard key={data.id} {...data} />
                                )
                            })
                        }

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Experience