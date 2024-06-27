import React from 'react';
import WrapperSection from '../shared/section/WrapperSection';
import "./skill.scss"
import Techimg from '../../images/tech-icons.png'
import ClickToAction from '../shared/clickAction/ClickToAction';
import { CiSaveDown1 } from "react-icons/ci";
// const pdfUrl='/MyResume.pdf';

const Skills = () => {


              const handleDownload=()=>{
                  const pdfUrl='/MyResume.pdf';
                  const link=document.createElement('a');
                  link.href=pdfUrl;

                   link.download='rajesh.pdf';

                   document.body.appendChild(link);

                   link.click();

                   document.body.removeChild(link);

              }
            
  return (
    
       <WrapperSection  
         background="dark"
         id="skills"
       >

          <div className="skills-content-wrapper">
            <div className="left-col">
                <img src={Techimg} alt="js,react,html,css" /> 
            </div>
            <div className="right-col">
              <h2>MY Skills</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, cupiditate incidunt porro deleniti quo aliquam architecto voluptates laboriosam minima fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores adipisci modi assumenda. Quo aut qui vero inventore rem perferendis quaerat.lorem20 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non quas ad accusantium fugiat asperiores! Culpa porro doloribus dolorem consequatur?</p>

             
             <div className="dwn">
              <p onClick={handleDownload}  className='download'  >Download CV </p>

             </div>


            </div>
           
            
          </div>
          
       </WrapperSection>

  )
}

export default Skills
