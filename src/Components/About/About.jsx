import React from 'react'
import './About.css'
import theme_image from '../../assets/theme_image.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return ( 
    //<img src={theme_pattern} alt=''/>   13
    //theme_pattern <img src={profile_img} alt=''/>   17
    //
    <div id='about' className='about'> 
    <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt=''/>
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={theme_image} alt=''/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am experienced Website developer with six months of development experience</p>
                <p>I am passionate about frontend and software development and always ready to learn new technologies</p>
            </div>
            <div className="about-skills">
                
                <div className="about-skill"><p>C/C++ </p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Java </p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Python </p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"90%"}}/></div>
                <div className="about-skill"><p>JavaScript </p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React Js,Tailwind Css </p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>Node Js,Express Js </p><hr style={{width:"80%"}}/></div>
                <div className="about-skill"><p>SQL,My SQL,MongoDB </p><hr style={{width:"90%"}}/></div>
                

            </div>
        </div>
        
    </div>
    <div className="about-achievements">
            <div className="about-achievement">
                <h1>1+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About