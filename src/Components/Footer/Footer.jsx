import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import mail_icon from '../../assets/mail_icon.svg'


const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                
                <p>I am Software developer from India with 6 months of experience.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={mail_icon} alt='' />
                    <input type='email' placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2024 Ramanand Kadam. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer