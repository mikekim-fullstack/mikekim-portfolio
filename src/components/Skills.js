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
import StickProgressBar from './StickProgressBar';

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
                        <h2 className='h2-title'>Skills</h2>
                        {/* <p>Computer Programming Languages</p> */}

                        <div className='progress-bar animation' ref={progressBarRef}>
                            <div className='skill-developer'>
                                <p>Frontend Developer</p>
                                <div className='skill-content'>
                                    <CircleProgressBar start={progressBarVisible} title={'HTML'} value={85} size={'150'} color={'rgba(255,105,180,1)'} />
                                    <CircleProgressBar start={progressBarVisible} title={'CSS'} value={86} size={'150'} color={'rgba(255,105,180,1)'} />
                                    <CircleProgressBar start={progressBarVisible} title={'JavaScript'} value={88} size={'150'} color={'rgba(255,105,180,1)'} />
                                    <CircleProgressBar start={progressBarVisible} title={'React JS'} value={87} size={'150'} color={'rgba(255,105,180,1)'} />
                                </div>
                            </div>
                            <div className='skill-developer'>
                                <p>Backend Developer</p>
                                <div className="skill-content">
                                    <CircleProgressBar start={progressBarVisible} title={'NodeJS'} value={80} size={'150'} color={'rgba(11, 206, 175,1)'} />
                                    <CircleProgressBar start={progressBarVisible} title={'Python'} value={85} size={'150'} color={'rgba(11, 206, 175,1)'} />
                                    <CircleProgressBar start={progressBarVisible} title={'Django'} value={85} size={'150'} color={'rgba(11, 206, 175,1)'} />
                                    <CircleProgressBar start={progressBarVisible} title={'SQL'} value={80} size={'150'} color={'rgba(11, 206, 175,1)'} />

                                </div>
                            </div>

                            <div>
                                <p>Source Code Control</p>
                                <StickProgressBar start={progressBarVisible} title={'Git/hub'} value={85} size={'0.8rem'} color={'rgba(11, 206, 175,1)'} />
                                <p>Development IDE</p>
                                <StickProgressBar start={progressBarVisible} title={'VS Code'} value={90} size={'0.8rem'} color={'rgba(11, 206, 175,1)'} />
                                <StickProgressBar start={progressBarVisible} title={'VS C++'} value={87} size={'0.8rem'} color={'rgba(11, 206, 175,1)'} />
                                <StickProgressBar start={progressBarVisible} title={'QT C++'} value={88} size={'0.8rem'} color={'rgba(11, 206, 175,1)'} />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

            <img className='background-image-left' src={colorSharp} />
        </section >
    )
}

export default Skills