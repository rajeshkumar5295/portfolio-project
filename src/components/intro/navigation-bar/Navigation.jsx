import React, { useState } from 'react'
import "./style.scss";
import logo from "../../../images/portfolio/rajesh-logos_black.png"
import ClickToAction from '../../shared/clickAction/ClickToAction';
import { TiArrowRight } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import { MdClose } from "react-icons/md";


import { Navigate } from '../../../utils';

const Navigation = () => {

     const [toggle,setToggle]=useState(false); 

     const handleToggle=()=>{
      setToggle(prev=> setToggle(!prev) )
     }
  return (
    <div className='top-navigation-bar' >
        <div className='app-logo' >
            <img src={logo} alt="" />
        </div>
        {
          !toggle ? (<TiThMenu  className='menu'  onClick={handleToggle}  />):( <MdClose   onClick={handleToggle} className='menu' /> ) 
        }
                
         <div className={`navigation ${toggle?"active":""}   `}>
            <div className="navigation-item"  onClick={()=>Navigate("skills")}  >Skills</div>
            <div className="navigation-item" >Portfolio </div> 
            <div className="navigation-item" onClick={()=>Navigate("blog")} > Blogs & Articles  </div>
            <ClickToAction  text="Contect Me "   id='mainform'   icon={<TiArrowRight/>} />

            
         </div> 
      

    </div>
    // <></>
  )
}

export default Navigation
