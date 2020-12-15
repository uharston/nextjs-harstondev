import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaMedium, FaGithub } from 'react-icons/fa';

function Landing() {
    return(
        <div className=" demo">

            <div className="content">
                
                <div id="large-header" className="large-header">
                    <canvas id="demo-canvas">
                <Image
                        className="bg-image"
                        src="/images/demo-bg.jpg"
                        alt="Picture of the galaxy"
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                        // width={1000}
                        // height={500}
                         priority={true}
                    />
                        
                        </canvas>
                    <h1 className="main-title">
                        <div className="thin" id="thin">I am Uriah Harston</div>
                        A Full Stack Developer
                    </h1>
                    <div className="welcome-icons text-center">
                        <div className='welcome-icons-wrapper'>
                            <a href="https://www.linkedin.com/in/uriah-harston/" target="_blank"><FaLinkedin className='landingIcons' /></a>
                            <a href="https://github.com/uharston" target="_blank"><FaGithub  className='landingIcons' /></a>
                            <a href="https://twitter.com/UriahHarston" target="_blank"><FaTwitter  className='landingIcons' /></a>
                            <a href="https://medium.com/@uharston" target="_blank"><FaMedium  className='landingIcons' /></a>
                        </div>
                    </div>  
                </div>
             </div>
         </div>
    )
}

export default Landing