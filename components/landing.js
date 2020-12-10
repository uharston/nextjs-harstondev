import { FaLinkedin, FaTwitter, FaMedium, FaGithub } from 'react-icons/fa';

function Landing() {
    return(
        <div className=" demo">
            <div className="content">
                <div id="large-header" className="large-header">
                    <canvas id="demo-canvas"></canvas>
                    <h1 className="main-title">
                        <div className="thin" id="thin">I am Uriah Harston</div>
                        A Full Stack Developer
                    </h1>
                    <div className="welcome-icons">
                        <a href="https://www.linkedin.com/in/uriah-harston/" target="_blank"><FaLinkedin size='5rem'/></a>
                        <a href="https://github.com/uharston" target="_blank"><FaGithub  size='5rem'/></a>
                        <a href="https://twitter.com/UriahHarston" target="_blank"><FaTwitter  size='5rem'/></a>
                        <a href="https://medium.com/@uharston" target="_blank"><FaMedium  size='5rem'/></a>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Landing