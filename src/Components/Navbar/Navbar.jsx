import React from 'react'
import './Navbar.css'
//import logo1 from '../../assets/logo1.png'
import nav_underline from '../../assets/nav_underline.svg'
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react';


const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0"
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px"
  }
  return (
    <div id='navbar' className='navbar'>
        <h1>Ramanand</h1>
        <img src={menu_open} alt='' onClick={openMenu} className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt='' className='nav-mob-close' />
            <li><AnchorLink className='anchor-link'  href='#home' ><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu==="about"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu==="education"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={nav_underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={nav_underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect" ><AnchorLink className='anchor-link' offset={50}href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar