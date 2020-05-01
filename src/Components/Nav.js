import React from 'react'


export default() => { 
    return ( 
        <ul className="nav-menu"> 
    
      <li> <h2> User</h2> </li>
      <li> <button className= "menuBtn" >
            <img 
            src="https://raw.githubusercontent.com/MonseSalasVi/GDL004-lab-notes/develop/src/img/menu.png" 
            alt="logo"

            /> Menu  
       </button>
       {/* <ul className="dropdown-content">
           <li className= "sub-menu-salir"><button className= "salirbtn" > Salir </button> </li>
       </ul> */}
       </li>

    </ul>
    )
}