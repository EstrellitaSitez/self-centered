import React from 'react'

const anchorStyle = {
    color:'black',
    padding:'1%'
}
const baseUrl = process.env.REACT_APP_BASE_URL
const Footer = () => (
    <div style={{bottom:'0', position:'relative', textAlign:'center', width:'100vw', fontFamily:'Khand', paddingTop:'4%', color:'grey'}}>
            ✨ made by gjdlc ✨
            <div>
            <a href={baseUrl+'/disclaimer'} style={anchorStyle}>
                Disclaimer
            </a>
            |
            <a href={baseUrl+'/about' }style={anchorStyle}>
                About
            </a>
            |
            <a style={anchorStyle} href={baseUrl+'/feedback'}>
                Feedback
            </a>
           

            </div>
            
    </div>
)

export default Footer