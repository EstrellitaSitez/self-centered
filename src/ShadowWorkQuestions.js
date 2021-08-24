import React from 'react' 
import { Divider } from 'antd'
import ShadowWorkQuestion from './ShadowWorkQuestion'



export default function ShadowWorkQuestions(props) {


    const passQuestionToKnowThyselfContainer = (question) => {
      props.addToQuestions(question)
    }

    const displayQuestions = () => {
        let results = []
       
        props.questions.forEach(
            (question, i) => {
               results.push(
               <ShadowWorkQuestion color={props.color} passQuestionToKnowThyselfContainer={passQuestionToKnowThyselfContainer} question={question} key={i}/>
               )
            }
        )
       
       return results
    }


    return(
        <div>
            <div style={{marginTop:'2%', alignText:'center'}}>  
           <div style={{marginLeft:'auto', marginRight:'auto', marginBottom:'2%', width:'50vw'}}>
           {
                (props.questions.length>0)? <div> <Divider/> <p>Use the '+' sign to add questions to your worksheet. You may add<b> up to three questions </b>across colors. When you are done, click on the 'Done' button that will appear above to download your worksheet.</p> <Divider/></div> : null
            }
           </div>
            {displayQuestions()}
             </div>
           
        </div>
    )
}

