import React from 'react'

const anchorStyle = {
    color:'black',
    padding:'1%'
}

const Footer = () => (
    <div style={{bottom:'0', position:'relative', textAlign:'center', width:'100vw', fontFamily:'Khand', paddingTop:'4%', color:'grey'}}>
            ✨ made by gjdlc ✨
            <div>
            <a href='/disclaimer' style={anchorStyle}>
                Disclaimer
            </a>
            |
            <a href='/about' style={anchorStyle}>
                About
            </a>
            |
            <a style={anchorStyle} href='/feedback'>
                Feedback
            </a>
           

            </div>
            
    </div>
)

export default Footer