import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import meter4 from '../assets/img/meter1.svg'
import colorSharp from '../assets/img/color-sharp.png'
import CircleProgressBar from './CircleProgressBar';

import './Skills.css'
const Skills = () => {
    let progressBarRef = useRef(null)
    const [progressBarVisible, setProgressBarVisible] = useState()

    useEffect(() => {
        // document.documentElement.style.setProperty('--value', 90)
        // console.log(document.styleSheets)
        const observer = new IntersectionObserver((entries) => setProgressBarVisible(entries[0].isIntersecting))
        observer.observe(progressBarRef.current)
        return () => { observer.unobserve(progressBarRef.current) }
    }, [])


    return (
        <section id='skills' className='skills'>
            <Container>
                <Row >
                    <Col className='skill-bx'>
                        <h2>Skills</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Vel explicabo magni possimus incidunt a eos voluptatem numquam quasi odit fugit officiis quidem cum voluptate saepe praesentium, amet nostrum? Ad, voluptate?</p>

                        <div className='prograss-bar animation' ref={progressBarRef}>
                            <CircleProgressBar start={progressBarVisible} title={'HTML'} value={85} size={'150'} color={'rgba(255,105,180,1)'} />
                            <CircleProgressBar start={progressBarVisible} title={'CSS'} value={85} size={'150'} color={'rgba(255,105,180,1)'} />
                            <CircleProgressBar start={progressBarVisible} title={'JavaScript'} value={90} size={'150'} color={'rgba(11, 206, 175,1)'} />
                            <CircleProgressBar start={progressBarVisible} title={'React JS'} value={88} size={'150'} color={'rgba(11, 206, 175,1)'} />
                        </div>
                    </Col>
                </Row>
            </Container>

            <img className='background-image-left' src={colorSharp} />
        </section >
    )
}

export default Skills