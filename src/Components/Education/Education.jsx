import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Education = () => {
  return (
    <div id='education' className='education'>
        <div className="education-title">
        <h1>Education</h1>
        <img src={theme_pattern} alt=''/>
        </div>
        <div className="education-container">
                <div className="education-container-year">
                    <p>2018</p>
                    <span>SSC</span>
                    <hr />
                    <p>VIDYA MANDIR HIGH SCHOOL</p>
                    <p>Vikhroli, Mumbai</p>
                </div>
                <div className="education-container-year">
                    <p>2020</p>
                    <span>HSC</span>
                    <hr />
                    <p>RAJARAM COLLEGE</p>
                    <p>Kolhapur</p>
                </div>
                <div className="education-container-year">
                    <p>2024</p>
                    <span>B.Tech in Computer Science and Engineering</span>
                    <hr />
                    <p>DKTE SOCIETY'S TEXTILE & ENGINEERING INSTITUTE</p>
                    <p>Ichalkaranji, Kolhapur</p>
                </div>
        </div>
    </div>
  )
}

export default Education