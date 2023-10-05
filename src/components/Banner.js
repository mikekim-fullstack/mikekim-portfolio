import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import emailUrl from '../assets/img/mail.svg'
import phoneUrl from '../assets/img/call.svg'
import addressUrl from '../assets/img/location.svg'
// import mikekimUrl from '../assets/img/mikekim.png'
import mikekimUrl from '../assets/img/MIKEKIM.JPG'
import './Banner.css'
const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Front End Developer", "React JS Developer", "Web Developer"];
    const period = 2000;

    useEffect(() => {

        const ticker = setInterval(tick, delta)
        return () => clearInterval(ticker)

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section id='home' className='banner'>
            <Container>
                <Row className='align-items-center'>
                    <Col sx={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my portfolio</span>
                        <h1>
                            {`Hello I'm Mike Kim `}
                            <span className='wrap'>{text}</span>
                        </h1>
                        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cupiditate tempore expedita alias harum recusandae eveniet animi aliquid laudantium maxime, fugiat deleniti mollitia totam illum magnam sunt labore dolorum amet.</p> */}
                        <ul className='my-info'>
                            <li className="wow fadeInUp" ><img src={emailUrl} alt='email' /><a href="mailto:">mikekim.fullstack@gmail.com</a></li>
                            <li className="wow fadeInUp" ><img src={phoneUrl} alt='phone' /><a href="callto:">+1 647 636 6379</a></li>
                            <li className="wow fadeInUp" ><img src={addressUrl} alt='address' /><address>Toronto, Ontario, Canada</address></li>
                        </ul>
                        {/* <a className='btn-download' href='https://mike-portfolio-c2fc9.web.app/mikekimCV2023.pdf' target="_blank" download='' >Download My CV <ArrowRightCircle /></a> */}
                        <a className='btn-download' href='./mikekimCV2023.pdf' target="_blank" download='' >Download My CV <ArrowRightCircle /></a>

                    </Col >
                    <Col sx={12} md={6} xl={5}>
                        <img className='ani-img' src={mikekimUrl} alt='Header Img' />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner