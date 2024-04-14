import React, { useState } from 'react';
import "./filter.scss";

  const filterData=[
    {
        name:"All",
        id:"all"
    },
    {
        name:"Product",
        id:"product"
    },
    {
        name:"Web Pages",
        id:"web-page"
    },
    {
        name:"Web Apps",
        id:"web-app"
    },
    {
        name:"Mobile Apps",
        id:"mobile-app"
    },
  ]

const Filter = ( {filterProjects} ) => {

    const[active,setActive]=useState("");
    console.log(active);

    const filterHandler=(id)=>{
      setActive(id)
      filterProjects(id)
    }

  return (
    <div className='filters-menus-items'> 
        {
             filterData.map((item,indtx)=>{
                return(
                    <li 
                    className={`filter-menu-item  ${active===item.id ? "active":""} `}
                    key={item.id} 
                      onClick={()=>filterHandler(item.id)}
                    > { item.name }  </li>
                )
             })
        }
       
    </div>
  )
}

export default Filter
