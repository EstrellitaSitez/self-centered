import React from 'react'  
import TarotCardBackground1 from './Assets/TarotCover/TarotCardBackground1.png'

export default function TarotFrontSide(props) {

    const tarotFront = {
        height:'100%',
        width:'100%',
    }

    return(
        <div onClick={()=>props.click(true)} style={tarotFront}>
           <img style={tarotFront} src={TarotCardBackground1} alt='flower outlines'/>
        </div>
      
    )
}