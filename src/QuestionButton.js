import React, {useState} from 'react'

export default function Button(props) {

    const passQuestionShadowWorkQuestions = (e) => {
        let color = (e.target.style['background-color'])
        let question = (e.target.previousElementSibling.textContent)
        props.props.passQuestionToKnowThyselfContainer(question)
        e.target.style.backgroundColor = e.target.style.color
    }

    return(
        <button 
        style = {{height:'100%', fontSize: 'larger', fontWeight:'bolder' ,backgroundColor: props.props.color.background, borderRadius:10, padding: '2%', border:'none' }}
        onClick = {(e) => passQuestionShadowWorkQuestions(e)}>
            +
        </button>
    )
} 