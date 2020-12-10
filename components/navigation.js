import {Container, Nav, Navbar, Row, Col, Form, Button } from 'react-bootstrap'

function Navigation() {
    return (
        <Navbar className="navbar-expand-lg  navbar-custom sticky-top" id="navbar-text">
            <a className="navbar-brand" href="#"><span id="navbar-logo">UH</span></a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                     <Nav.Link href="#about-me-section">About Me<span className="sr-only">(current)</span></Nav.Link>
                  </li>
                  <li className="nav-item">
                     <Nav.Link href="#project-section">Projects</Nav.Link>
                  </li>
                  <li className="nav-item">
                     <Nav.Link href="#contact-section" >Contact</Nav.Link>
                  </li>
               </ul>
            </div>
         </Navbar>
        
    ) 

}

export default Navigation