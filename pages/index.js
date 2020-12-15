
import Head from 'next/head'
import Link from "next/link"

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
    <div>
      <Head>
        <title>Uriah Harston | Portfolio </title>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="_" />
        <meta name="title" property="og:title" content="Uriah Harston | Portfolio" />
        <meta property="og:type" content="_" />
        <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/50574220326_2ab86bf8be_k.jpg" />
        <meta name="description" property="og:description" content="_" />
        <meta name="author" content="Uriah Harston" />
      </Head>
      
      <div className="page-wrapper" id="Home myDiv" >

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
     
      <script src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js'></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
      <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
    </div>

    
  )
}

