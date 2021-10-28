import React, { useEffect, useState } from 'react'
import ShadowWorkForm from './ShadowWorkForm'

export default function OnlineWorksheet() {

    const [questions, setQuestions] = useState([])
    
    useEffect(()=>{
        if (history.state != null) {
            setQuestions(history.state.state)
        }
    })

    return(
        <div style={{alignItems:'center'}}>
            {
                (questions.length > 0)? 
                    <div>
                        <ShadowWorkForm questions={questions} />
                    </div>
                    :
                    <div style={{textAlign:'center', minHeight:'25vh', marginTop:'3em'}}>
                       
                        <p>You haven't selected any questions :( </p>
                        <a href='/know-thyself'> Go check some out </a>
                    
                    </div>
            }
        </div>
    )
}