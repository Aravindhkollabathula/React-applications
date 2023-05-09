import React from 'react'
import HeaderNavigationItems, { HeaderNavigationButtons } from './HeaderNavigationItems'
import './HeaderHomepage.css'

function HomepageHeader(){
    return(
        <div className='header-container' >
        <div>
                logo
        </div>
        
           <HeaderNavigationItems />
            <HeaderNavigationButtons />
        
        </div>
    )  
}
export  default HomepageHeader