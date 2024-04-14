import React from 'react';
import './blog.scss';
import { FaArrowRight } from 'react-icons/fa';



const BlogCard = ({image,user,date,title,discription}) => {

  var currentDate = new Date();
var options = { day: '2-digit', month: 'long', year: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <div className='main-container' >
        <div className="image-section">
            <img src={image} alt="" />
        </div>
        <div className="content-section">
            <div className="info">
                <div className="name">{user} </div>
                <div className="date"> {formattedDate} </div>
            </div>
            <h3> {title} </h3>
            <div className="description"> { discription  }  </div>
            <span> <FaArrowRight/> </span>
        </div>
     
    </div>
  )
}

export default BlogCard
