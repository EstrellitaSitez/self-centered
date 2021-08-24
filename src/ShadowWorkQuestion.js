import React from 'react'
import { isMobile } from 'react-device-detect'
import QuestionButton from './QuestionButton'

export default function ShadowWorkQuestion (props)  {

    

    return(
        <div style={{position:'relative', color: props.color.textColor, fontFamily:'Rajdhani', fontWeight:'bold', marginBottom:'3%'}}>
        <div style = {{display:'inline-block', padding:(isMobile? '4%' : '2%'), marginRight:'1%', backgroundColor: props.color.background, borderRadius:10, maxWidth:'60vw'}}>
            {props.question}
        </div>
        <QuestionButton props ={props}/>
         </div>
    )

}