import React, { useState } from 'react'
import ShadowWorkQuestions from './ShadowWorkQuestions'
import ViewNeedsandFeels from './ViewNeedsandFeels'

export default function KnowThyself() {
   
    const colors = [
        {background: 'violet', textColor:'white'},
         {background: 'indigo', textColor: 'white'}, 
         {background: 'blue', textColor:'white'}, 
         {background: 'green', textColor:'white'}, 
         {background: 'yellow', textColor:'black'}, 
         {background: 'orange', textColor: 'white'}, 
         {background: 'red', textColor:'white'}
    ]
    
    const [selectedQuestions, selectQuestion] = useState([])
    const [selectedColor, selectColor] = useState(null)

    
    const addToQuestions = (question) => {
        selectQuestion([...selectedQuestions, question])
    }

    const clearSelectedQuestions = () => {
        selectQuestion([])
    }

    const makeCircles = () => {
        return colors.map(
            (color, i) => {
                return <div onClick={()=> selectColor(color)} key={i} style={{backgroundColor: color.background, borderRadius:'50%', width:'7em', height:'7em', padding: '2%', margin:'1%'}}> </div>
            }
        )
    }

    return(
        <div style={{textAlign:'center'}}>
            <div style={{ padding:'1%', color:'white', backgroundColor:'black', fontFamily:'khand'}}> <b>Who are you?</b> <br/>Click on a color to see journaling prompts to guide you through your self discovery. </div>
            <div style={{ display: 'flex', justifyContent:'center', paddingTop:'5%'}}>
            {makeCircles()}
            </div>

            {
                (selectedColor != null)? <ShadowWorkQuestions addToQuestions={addToQuestions} clearSelectedQuestions={clearSelectedQuestions} color={selectedColor}/> : ''
            }
            <div>
            < ViewNeedsandFeels/>
            </div>
        </div>
    )
}


//how would i unclick questions