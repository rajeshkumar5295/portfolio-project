import React from 'react'
import "./wrappersection.scss";

const WrapperSection = ( {children,id,className,title,  background} ) => {
  return (
    <div  
      id={id || ""}
    className={  `section  ${className ? className : ""} ${  background==="dark"?"dark":"light"}` }  >

        <div className={`content  ${id==="portfolio"? "portfolio":"" }  `}>
             {title && (
                <div className={`section-title ${id==="portfolio"?"portfoliotitle":""}`} >  <h2> {title} </h2>  </div>
             )}

             {children} 
        </div>
      
    </div>
  )
}

export default WrapperSection
