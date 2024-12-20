import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img className="profile_img" src={profile_img} alt=''/>
        <h1><span>I'm Ramanand Kadam</span>, Software Developer</h1>
        <p>Self-driven, learner-on-the-go, passionate programmer. A curious mind who enjoys solving a complex and challenging real-world problems. Vision is to use technology to make a difference in lives of people </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume"><a href='https://drive.google.com/file/d/1K2WJ3o6OxYvv_2pqyJAE68WldjyWjFyx/view?usp=drivesdk ' target='_next' >Resume</a></div>

        </div>
    </div>
  )
}

export default Hero