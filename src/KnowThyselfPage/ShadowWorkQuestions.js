import React from 'react' 
import { Divider } from 'antd'
import ShadowWorkQuestion from './ShadowWorkQuestion'



export default function ShadowWorkQuestions(props) {
    const baseUrl = process.env.REACT_APP_BASE_URL

    const passQuestionToKnowThyselfContainer = (question) => {
      return props.addToQuestions(question)
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
        <div id='ShadowWorkQuestions'>
            <div style={{marginTop:'2%', alignText:'center'}}>  
           <div style={{marginLeft:'auto', marginRight:'auto', marginBottom:'2%', width:'50vw'}}>
           {
                (props.questions.length>0)? 
                <div> <Divider/>
                     <p><b> You may look through all colors. Select up to three questions total.</b></p>
                     Refer to the <a href={baseUrl+'/NeedsInventory'}  target="_blank"> Needs Inventory⬈ </a> 
                    and the <a href={baseUrl+'/FeelingsInventory'}  target="_blank"> Feelings Inventory⬈</a> to further understand the roots of your triggers.
                    
                 <Divider/></div> 
                : null
            }
           </div>
            {displayQuestions()}
             </div>
           
        </div>
    )
}

