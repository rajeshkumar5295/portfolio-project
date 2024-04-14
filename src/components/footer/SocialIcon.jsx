import React from 'react';


const SocialIcon = ( {icon,color ,link }  ) => {

     console.log(icon,color,link)
  return (
    <div  
    className='social-icon' 
      onClick={()=>window.open(link,"_blank")} 
      style={{backgroundColor:color}}
    >  

            {icon}
    </div>
  )
}

export default SocialIcon
