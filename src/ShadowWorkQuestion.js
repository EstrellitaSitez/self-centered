import React from 'react'
import { isMobile } from 'react-device-detect'

export default function ShadowWorkQuestion (props)  {

    const passQuestionShadowWorkQuestions = (e) => {
        let color = (e.target.style['background-color'])
        // let question = (e.target.previousElementSibling.textContent)
    //    props.passQuestionToKnowThyselfContainer(question)
    console.log(e.target.previousElementSibling.innerText)
        e.target.style.backgroundColor = e.target.style.color
    }

    return(
        <div style={{position:'relative', color: props.color.textColor, fontFamily:'Rajdhani', fontWeight:'bold', marginBottom:'3%'}}>
        <div style = {{display:'inline-block', padding:(isMobile? '4%' : '2%'), marginRight:'1%', backgroundColor: props.color.background, borderRadius:10, maxWidth:'60vw'}}>
            {props.question}
        </div>
        <button 
        style = {{height:'100%', fontSize: 'larger', fontWeight:'bolder' ,backgroundColor: props.color.background, borderRadius:10, padding: '2%', border:'none' }}
        onClick = {(e) => passQuestionShadowWorkQuestions(e)}>
            +
        </button>
         </div>
    )

}