import React from 'react';
import WrapperSection from '../shared/section/WrapperSection';
import rajesh from '../../images/portfolio/rajesh.jpg';
import SocialIcon from './SocialIcon';

import { FaYoutube } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import './footer.scss';
import { Navigate } from '../../utils';
import { FaArrowUp } from "react-icons/fa6";


const Footer = () => {
      
  return (
       <WrapperSection  
          id="footer"
          background="grey"
       >
          <div className="footer-container">
               <div className="footer-img">
                  <img src={rajesh}  alt="" />  
               </div>

               <ul>
                  <li  onClick={()=>Navigate("skills")}  >Skill</li>
                  <li onClick={()=>Navigate("portfolio")} >Portfolio</li> 
                  <li onClick={()=>Navigate("blog")} >Blog & Articles</li>
                  <li onClick={()=>Navigate("mainform")}   >Contact Me </li>  
               </ul>
               

               <div className="socil-icons">
                  <SocialIcon   icon={<FaYoutube/>}   color="red" link="https://www.youtube.com/"  />  
                  <SocialIcon   icon={<VscGithub/>}   color="gray"  link="https://github.com/"  /> 
                  <SocialIcon   icon={<FaLinkedin/>}  color="blue" link="https://www.linkedin.com/in/rajesh-kumar-72a573254/"  /> 
                  <SocialIcon   icon={<IoLogoWhatsapp/>}   color="green"  link="https://www.instagram.com/" /> 
                  {/* <SocialIcon   icon={<FaYoutube/>}   color="red"    />  */}
               </div>

               <div className='border'> </div>

               <div className='footer-bottom' >
                  <h3> Copyright © | All Right Reserved  </h3> 
               </div>
                

               <span className='scroll-Button'  title='Go to top'  onClick={()=>window.scrollTo({top:0,left:0,behavior:'smooth'})}  > <FaArrowUp/> </span>

          </div>

       </WrapperSection>
  )
}

export default Footer
