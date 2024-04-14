import React from 'react';
import WrapperSection from '../shared/section/WrapperSection';
import Contact from './Contact';
import Form from './Form';
import './mainform.scss';


const MainForm = () => {
  return (
       <WrapperSection   
          id="mainform"
          title="Any Question ? Feel Free to Contact"
          background="grey"
       >

        <div className="main-form-content">
             <Contact/>
             <Form/>
        </div>
          
       </WrapperSection>
    )
}

export default MainForm
