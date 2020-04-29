import React from 'react'


export default() => { 
    return ( 
        <ul className="nav-menu"> 
    
      <li> <input type="text" placeholder="Search.." className="search"/></li>
      <li> <button className= "menuBtn" >
            <img 
            src="https://raw.githubusercontent.com/MonseSalasVi/GDL004-lab-notes/develop/src/img/menu.png" 
            alt="logo"

            /> Menu  
       </button>
       </li>

    </ul>
    )
}