import React, { useState } from 'react'
import WrapperSection from '../shared/section/WrapperSection'

import Filter from './Filter';
import ShowCase from './ShowCase';


const projectsData = [
    {
        id: 1,
        name: "Healthy Food Restraunt",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.jpg"),
        },
    },
    {
        id: 2,
        name: "Anna & Daniel",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.jpg"),
        },
    },
    {
        id: 3,
        name: "Web Design Landing Page",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.jpg"),
        },
    },
    {
        id: 4,
        name: "Business Analytics Web App",
        tags: ["web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.jpg"),
        },
    },
    {
        id: 5,
        name: "Limitless",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.jpg"),
        },
    },
    {
        id: 6,
        name: "Dashboard",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "Digital Creative Agency",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Virtual Reality Experience",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
];
const Portfolil = () => {

      const[products,setProducts]=useState(projectsData);
      const[transition,setTransition]=useState(false);

 
          const filterProjects=(tag)=>{
            setTransition("ZoomOut");

            setTimeout(()=>{
                if(tag!=="all"){
                
                    const filterProduct=projectsData.filter((f)=>f.tags.includes(tag))
                    console.log(filterProduct,"checking filterproduct");
                    setProducts(filterProduct);
                 } else{
                      setProducts(projectsData)
                 }

                 setTransition("ZoomIn");

            },200)


            setTimeout(()=>{
                setTransition(false)
            },600)

           
          
            }
        
  return ( 
    <WrapperSection  
     id="portfolio"
     background="light"
     title="Check My Portfolio"
    >

        <div className="portfolio-content-wrapper">
             <Filter  
              filterProjects={(tag)=>filterProjects(tag)} 
              
              />
             <ShowCase  
               data={products} 
               transition={transition} 
             />
        </div>
         
    </WrapperSection>
  )
}

export default Portfolil
