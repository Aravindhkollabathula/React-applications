import React from 'react'
import './HeaderNavItems.css'

function HeaderNavigationItems(){
    return(
        <div className='NavItems' >
             <span>Home</span>
             <span>About</span>
             <span>Contact</span>
             <span>Description</span>
            </div>
    )
}
export default HeaderNavigationItems

function HeaderNavigationButtons(){
    return(
        <div>
            <button>Login</button>
            <button>Logout</button>
        </div>
    )
}
export {HeaderNavigationButtons}