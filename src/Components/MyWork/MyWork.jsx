import React from 'react'
import './MyWork.css'
import { useState } from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const MyWork = () => {
  const [menu,setMenu] = useState("");

  const website = () =>{
        
  }


  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt=''/>
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return ( <img key={index} src={work.w_img} alt=''/> 
                        
            )
            })
            }
        </div>
        <div className="mywork-showmore">
         <a href='https://github.com/ramanandkadam?tab=repositories' target='_blank'>Click here to view</a>
            <img src={arrow_icon} alt=''/>
        </div>
    </div>
  )
}

export default MyWork