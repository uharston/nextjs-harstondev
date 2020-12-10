import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Container, Nav, Navbar, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { FaLinkedin, FaTwitter, FaMedium, FaGithub } from 'react-icons/fa';

import Navigation from '../components/navigation.js'
import ProjectCard from '../components/projectCard.js'
import Footer from '../components/footer.js'

export default function Home() {
  return (
    <div>
      <div className=" demo">
        <div className="content">
          <div id="large-header" className="large-header">
            <canvas id="demo-canvas"></canvas>
            <h1 className="main-title">
              <span className="thin" id="thin">I am Uriah Harston</span>A Full Stack Developer
            </h1>
            <div className="welcome-icons">
              <a href="https://www.linkedin.com/in/uriah-harston/" target="_blank"><i className="fab fa-linkedin-in fa-3x"></i></a>
              <a href="https://github.com/uharston" target="_blank"><i className="fab fa-github fa-3x"></i></a>
              <a href="https://twitter.com/UriahHarston" target="_blank"><i className="fab fa-twitter fa-3x"></i></a>
              <a href="https://medium.com/@uharston" target="_blank"><i className="fab fa-medium fa-3x"></i></a>
            </div>  
          </div>
        </div>
      </div>
      <Navigation />
      <Container classNameName="page-content">
        <Row>
          <Col></Col>
          <Col>
            <Container>
              <Row>
                <Col xs={12} md={6} classNameName='text-center'> 
                    <img src='./images/profile2.png' classNameName='profile-image ' />
                </Col>
                <Col xs={12} md={6} classNameName='col-xs-12 col-md-6'> 
                <h1 id="about-me-section" classNameName="title">About Me</h1><br/>
                <p classNameName='description'>I am a technical, meticulous, detail oriented, and highly motivated individual. 
                    In the past, I have honed and harnessed these skills when I worked as a book binder, 
                    done custom car builds, and by starting my own business from scratch. In attending the 
                    Flatiron Full-Time Software Immersive Course, I have put these skills to the test. 
                    Now I can make beautiful websites with technologies like Ruby on Rails, Javascript, 
                    React, and Redux. </p>
                </Col>
              </Row>
            </Container>
            <section classNameName='project-section' id="project-section">
              <div classNameName='text-center'>
                      <h1 classNameName='title'>My Projects</h1>
              </div>
              <ProjectCard />
            </section>
            <h1 classNameName="title">Get in Touch</h1><br/>
            <Container classNameName='contact sections ' id="contact-section">
                <Row>
                    <Col >
                        <p classNameName="description" >I am currently looking to work at a fun, hands-on, and remote-friendly software engineering position. 
                            Feel free to reach out me with by email at <span >uharston@gmail.com</span>.</p>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
          </Col>
        </Row>
      </Container> 
      

     
                
      <Footer />
  </div>

    
  )
}

