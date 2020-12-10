import {Container, Row, Col} from 'react-bootstrap'

function About() {
    return(
        <Container>
        <Row>
          <Col xs={12} md={6} className='text-center'> 
              <img src='./images/profile2.png' className='profile-image ' />
          </Col>
          <Col xs={12} md={6} className='col-xs-12 col-md-6'> 
          <h1 id="about-me-section" className="title">About Me</h1><br/>
          <p className='description'>I am a technical, meticulous, detail oriented, and highly motivated individual. 
              In the past, I have honed and harnessed these skills when I worked as a book binder, 
              done custom car builds, and by starting my own business from scratch. In attending the 
              Flatiron Full-Time Software Immersive Course, I have put these skills to the test. 
              Now I can make beautiful websites with technologies like Ruby on Rails, Javascript, 
              React, and Redux. </p>
          </Col>
        </Row>
      </Container>
    )
}

export default About 