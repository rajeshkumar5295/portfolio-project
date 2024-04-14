import React from 'react'
import "./style.scss";
import { Navigate } from '../../../utils';

const ClickToAction = ({text,icon ,id }) => {
  return (
    <div className='click-to-action'   onClick={()=>Navigate(id)} >  
      <span className='click-text' > {text}  </span>
      <span className= {`${id?"idstyle":"icon "} `   }> {icon} </span>
    </div>
  )
}

export default ClickToAction
