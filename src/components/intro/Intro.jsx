import React from 'react'
import "./intro.scss";
import cloudsoft from "../../images/cloud-soft.png";
import cloud from "../../images/cloud.png"
import Navigation from './navigation-bar/Navigation';
import NavigationContent from './navigation-content/NavigationContent';



const Intro = () => {
  return (
    <div className='Intro-section' > 
      <div className="vector-bg" id='parallax' ></div>
      <img src={cloud} alt=""  className='cloud' /> 
      <img src={cloudsoft} alt="" className='cloud-soft'  />
   
      <div className="content">
       <Navigation/> 
       <NavigationContent/>
      </div> 
      
    </div>
  )
}

export default Intro
