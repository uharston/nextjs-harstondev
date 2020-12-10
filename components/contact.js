import {Container, Row, Col} from 'react-bootstrap'

function Contact() {
    return (
        <div className='contact'>
            <h1 className="title">Get in Touch</h1><br/>
            <Container className='contact sections ' id="contact-section">
                <Row>
                    <Col >
                        <p className="description" >I am currently looking to work at a fun, hands-on, and remote-friendly software engineering position. 
                            Feel free to reach out me with by email at <span >uharston@gmail.com</span>.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact