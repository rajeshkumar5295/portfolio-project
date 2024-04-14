import React from 'react';
import './showcase.scss'; 
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const ShowCase = ( {data,transition}  ) => {
  return (
    <div className='content-wrapper'> 
   
          
            {
              data?.map((item  ,index)=>(
                  <div  
                      key={index} 
                   className={`content ${transition==="ZoomOut"?"ZoomOut":transition==="ZoomIn"?"ZoomIn":"" }  `}   >
                         <div className="meta-content">
                            <h3> {item.name} </h3>
                            <div className="go-to-cta">
                              <span>Project Details</span>
                              <FaArrowAltCircleRight/>
                            </div>
                         </div>
                       <img src={item?.media?.thumbnail} alt="projectimg" />
                  </div>
              ))
            }
          
        
      
      
    </div>
  )
}

export default ShowCase
