import React from 'react'
import ClickToAction from '../../shared/clickAction/ClickToAction'
import { TiArrowRight } from 'react-icons/ti'
import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import './navigation.scss'
import { FaTrophy } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


const NavigationContent = () => {
  return (
    <div className='Intro-content' >
          <div className="layout">
              <div className="left-part">
                 <h1 className='title' > 
                   <div className="small-text">
                       <span> Hello  </span>
                         <img src={hand}   alt="" />
                        <span> , I am </span>

                     
                   </div>
                   <span className="big-text"> FULL STACK WEB DEVELOPER </span>

                 </h1>

                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, fugit! Esse, nemo, enim libero maxime iure consequuntur cumque mollitia magnam nostrum sit at itaque ipsum amet, harum accusantium ab cum!</p>
                  <ClickToAction text="Get Started"   id="portfolio" icon={<TiArrowRight/>}  />
              </div>

              <div className="right-part">
                
                  <img src={girl} alt="" />
              

                <div className=" highlights horizontal">
                  <div className="icon"> < FaTrophy/>  </div>
                  <div className='text' > Best Design Awards  </div>
                </div>
                <div className=" highlights vertical">
                  <div className="icon"> <FaUser/> </div>
                  <div className="text-v"> 
                     <span className='number' > 4k+ </span>
                      <span className='numcus'> Happy Customers</span>

                    </div>
                </div>
              </div>

          </div>
    </div>
  )
}

export default NavigationContent
