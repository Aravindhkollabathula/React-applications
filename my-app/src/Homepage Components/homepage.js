import React from 'react'
import HomepageHeader from './HomepageHeader'
import HomepageBody from './HomepageBody'
import HomepageFooter from './HomepageFooter'

function Homepage(){
    return(
        <div>
           <h1>
           <HomepageHeader />
            
            <HomepageBody />
        
            <HomepageFooter />
            
           </h1>
        </div>
    )
}
export default Homepage