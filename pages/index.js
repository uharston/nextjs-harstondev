import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Container, Nav, Navbar, Row, Col, Form, Button, Card } from 'react-bootstrap'
import Landing from '../components/landing.js'
import Navigation from '../components/navigation.js'
import About from '../components/about.js'
import Projects from '../components/projects.js'
import Contact from '../components/contact.js'
import Footer from '../components/footer.js'

export default function Home() {
  return (
      <div class="page-wrapper" id="Home myDiv" >

        <Landing />

        <Navigation />

        <Container className="page-content">

          <Row>

            <Col></Col>

            <Col xs={12}>
              
              <About/>

              <Projects />
              
              <Contact />

            </Col>

          </Row>

        </Container> 

        <Footer />

      </div>

    
  )
}

