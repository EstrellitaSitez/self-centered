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
        <div id='ShadowWorkQuestions'>
            <div style={{marginTop:'2%', alignText:'center'}}>  
           <div style={{marginLeft:'auto', marginRight:'auto', marginBottom:'2%', width:'50vw'}}>
           {
                (props.questions.length>0)? 
                <div> <Divider/>
                     <p> Click on the box next to the questions you wish to add to your worksheet. You may add<b> up to three questions </b> total. </p>
                     Refer to the <a href='/NeedsInventory'  target="_blank"> Needs Inventory⬈ </a> 
                   and the <a href='/FeelingsInventory'  target="_blank"> Feelings Inventory⬈</a> to further understand the roots of your triggers.
                     <p> Click 'Done' to finalize your worksheet.</p>
                 <Divider/></div> 
                : null
            }
           </div>
            {displayQuestions()}
             </div>
           
        </div>
    )
}

