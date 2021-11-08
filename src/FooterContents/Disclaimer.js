import React from 'react'
import { Link } from 'react-router-dom'
import './FooterLink.css'
 


const Disclaimer = () => (
    <div className='footerLink'>
        <div style={{color:'black'}}>
           <b>DISCLAIMER</b>: Self analysis by no means replaces the help of a professional. 
        </div>
        <div style={{color:'#800020'}}>
          <b>  <a  id='ruminationLink' style={{color:'#800020'}}  href='https://www.verywellmind.com/repetitive-thoughts-emotional-processing-or-rumination-3144936' target='_blank'> investigate, don't ruminate</a></b>
        </div>
    </div>
)

export default Disclaimer