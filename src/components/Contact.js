import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Contact.css'
import contactImg from '../assets/img/contact-img.svg'
const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})
    const onFormSubmit = (e) => {

    }
    const onFormUpdate = (e) => {
        console.log('onFormUpdate', e.target.name, e.target.value)
        setFormDetails({ ...formDetails, [e.target.name]: e.target.value })
    }
    return (
        <section className='contact' id='contact'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt='contact image' />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={(e) => onFormSubmit(e)}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.firstName} name='firstName' placeholder='First Name' onChange={(e) => onFormUpdate(e)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='text' value={formDetails.lastName} name='lastName' placeholder='Last Name' onChange={(e) => onFormUpdate(e)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='email' value={formDetails.email} name='email' placeholder='Email Address' onChange={(e) => onFormUpdate(e)} />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input type='tel' value={formDetails.lastName} name='phone' placeholder='Phone No.' onChange={(e) => onFormUpdate(e)} />
                                </Col>
                                <Col>
                                    <textarea value={formDetails.message} name='message' placeholder='Message' onChange={(e) => onFormUpdate(e)} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                            {/* If there is error, show error message */
                                status?.message && (
                                    <Col>
                                        <p className={status.message === false ? 'danger' : 'success'}>{status.message}</p>
                                    </Col>
                                )
                            }
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Contact