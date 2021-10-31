import React from 'react'

const ThankYouPage = () => {
   return(
    <div style={{textAlign:'center'}}>
    <h5>Thank you for your feedback! </h5>
    <span style={{fontFamily:'Khand'}}> 
        <a href={process.env.REACT_APP_BASE_URL+'/'}>
            Home
        </a>
    </span>
    </div>
   )
}

export default ThankYouPage