import React from 'react';
import './contect.scss';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
        <div className="contact-info-box">
                 {/* <h2>Contact Information</h2> */}
              <h4>  I would be happy to answer any questions you may have about freelance writing or content marketing </h4>
              <div className="content-option">
                <FaPhoneAlt/>
                <span className='number' >+91 6206098820</span>
              </div>

              <div className="content-option">
                   <MdEmail/>
                <span> rajeshatka4746@gmail.com</span>
              </div>
        </div>
  )
}

export default Contact
