import React from 'react'
import './blog.scss'; 
import WrapperSection from '../shared/section/WrapperSection'
 import blog1 from "../../images/blogs/blog-thumb-1.jpg";
 import blog2 from "../../images/blogs/blog-thumb-2.jpg";
 import blog3 from "../../images/blogs/blog-thumb-3.jpg";
import BlogCard from './BlogCard';

import {Navigate} from "../../utils/index";

const Blog = () => {
  return (
   <WrapperSection  
     title="Blogs & Articles"
     id="blog"
     background="dark"
   >
     
    <div className="blog-content">
           <BlogCard 
            image={blog1} 
            user="Rajesh Kumar"
            date="31 March,2024"
            title="Quis Autem Vea Eun Iure Reprehendrit"
            discription=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis reprehenderit ad eaque architecto molestiae ipsum error numquam provident iste sunt.
            "
            
            />
             <BlogCard 
            image={blog2} 
            user="Rajesh Kumar"
            date="31 March,2024"
            title="Quis Autem Vea Eun Iure Reprehendrit"
            discription=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis reprehenderit ad eaque architecto molestiae ipsum error numquam provident iste sunt.
            "
            
            />
             <BlogCard 
            image={blog3} 
            user="Rajesh Kumar"
            date="31 March,2024"
            title="Quis Autem Vea Eun Iure Reprehendrit"
            discription=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis reprehenderit ad eaque architecto molestiae ipsum error numquam provident iste sunt.
            "
            
            />
    </div>


   </WrapperSection>
  )
}

export default Blog
