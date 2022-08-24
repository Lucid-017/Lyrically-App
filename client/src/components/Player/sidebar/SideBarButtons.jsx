import React from 'react'
import { IconContext } from 'react-icons'
import {Link} from "react-router-dom"

function SideBarButtons({title,icon,to}) {
  return (
    <Link to={to} >
        <div className=" mx-auto my-3 rounded text-white flex items-center justify-center flex-col">
           <IconContext.Provider value={{size:"20px",className:"btn-icon"}}>
           {icon}
           <p className='mx-auto my-1 font-medium'>{title}</p>
           </IconContext.Provider>
            
        </div>
    </Link>
  )
}

export default SideBarButtons