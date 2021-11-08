import React from 'react'
import { Link } from 'react-router-dom'
  


const anchorStyle = {
    color:'black',
    padding:'1%'
}
const Footer = () => (
    <div style={{bottom:'0', position:'relative', textAlign:'center', width:'100vw', fontFamily:'Khand', paddingTop:'4%', color:'grey'}}>
            ✨ made by gjdlc ✨
            <div>
              <Link   to='/disclaimer' style={anchorStyle}>
                Disclaimer
            </Link>
            |
              <Link   to='/about' style={anchorStyle}>
                About
            </Link>
            |
              <Link  style={anchorStyle}  to='/feedback'>
                Feedback
            </Link>
           

            </div>
            
    </div>
)

export default Footer