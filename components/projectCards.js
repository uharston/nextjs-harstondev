import Image from 'next/image'
import {Row, Col, Card } from 'react-bootstrap'
import styles from '../styles/utils.module.css'


function ProjectCards() {
    return (
        <div>
            <Card className={styles.projectCards}>
                <Row >
                    <Col className={styles.projectImageContainer} xs={12} lg={6} >
                        <Image 
                            src='/images/Pooch-screenshot.png' 
                            alt="dog adoption website landing page"
                            layout='intrinsic'
                            width={489}
                            height={249}
                        />
                    </Col>
                    <Col xs={12} lg={6}  >
                        <h2 className="project-title">Pooch</h2>
                        <a href="https://www.pooch.netlify.app" target="_blank"><i className="fas fa-external-link-alt fa-2x float-right "></i></a>
                        <a href="https://github.com/uharston/pooch" target="_blank"><i className="fab fa-github fa-2x float-right "></i></a>
                        <p className='description'> Dogs are known to be man's best friend. Pooch connects local rescues to percpective owners looking to give these doggos
                            the love and attention they have been missing. </p>
                    </Col>
                </Row>
            </Card>
            
        </div>
    )
}

export default ProjectCards