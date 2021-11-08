import React from 'react'
import { Link } from 'react-router-dom'
  


const ThankYouPage = () => {
   return(
    <div style={{textAlign:'center'}}>
    <h5>Thank you for your feedback! </h5>
    <span style={{fontFamily:'Khand'}}> 
          <Link   to='/'>
            Home
        </Link>
    </span>
    </div>
   )
}

export default ThankYouPage