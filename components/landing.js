import { FaLinkedin, FaTwitter, FaMedium, FaGithub } from 'react-icons/fa';

function Landing() {
    return(
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
    )
}

export default Landing