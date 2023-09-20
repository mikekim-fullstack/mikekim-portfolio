import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TimeLineCard from './TimeLineCard'
import './Education.css'
const Education = () => {
    const colorTheme = {
        '--card-bg-color': '#1f3344a6',
        '--card-bg-title-color': 'rgb(87 94 167 / 62%)',
        '--card-company-color': 'rgb(56 162 223)',
        '--card-company-hover-color': 'rgb(127 204 249)',
        '--card-description-color': 'rgb(137 175 209)',
        '--card-period-color': ' #b8b8b8',
        '--card-list-color': '#b8b8b8',
        '--card-responsibility-color': ' #cbcaca',
        '--card-min-width': '10%'
    }
    const experienceData = [
        {
            id: 1,
            role: 'Front end Developer',
            company: 'Seytech Bootcamp',
            site: 'https://www.seytech.co/',
            period: 'Jun. 2022 - Dec. 2022',
            description: 'HTML, CSS, JavaScript, Data Structures and Algorithms, DOM, React JS',

        },
        {
            id: 2,
            role: 'KUKA Advanced Robotics',
            company: 'KUKA',
            site: 'https://www.kuka.com/',
            period: '2015',
            description: 'Programming Certification Course in Augsburg, Germany',

        },
        {
            id: 3,
            role: 'MASc',
            company: 'University of WATERLOO',
            site: 'https://uwaterloo.ca/',
            period: '1999-2003',
            description: 'Master Degree of Mechanical Engineering. Obtained NSERC Full Scholarship and Fellowship. Thesis: Multi-body Kinematics & Dynamics Analytical Simulation',

        },

    ]
    return (
        <section id='education' className='education'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='h2-title'>Education</h2>

                        <div className='education-container'>
                            {
                                experienceData.map((data) => (
                                    <div className='education-card'>
                                        <h5 className='period'>{data.period}</h5>
                                        <h4 className='role'>{data.role}</h4>
                                        <a href={data.site} target='_blank' className='company'>{data.company}</a>
                                        <p className='description'>{data.description}</p>
                                    </div>
                                )
                                    // console.log(data)
                                    // return <TimeLineCard key={data.id} {...data} style={colorTheme} />
                                )
                            }
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Education