import {Nav, Navbar} from 'react-bootstrap'
import styles from '../styles/utils.module.css'

function Navigation() {
    return (
      <Navbar className={styles.navigation} variant="dark" expand="sm">
         <Navbar.Brand href="#home">UH</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
               <Nav.Link href="#about-me-section">About Me<span className="sr-only">(current)</span></Nav.Link>
               <Nav.Link href="#project-section">Projects</Nav.Link>
               <Nav.Link href="#contact-section" >Contact</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar> 
    ) 
}

export default Navigation