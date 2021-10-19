import React, { useState, useEffect } from 'react'
import ShadowWorkQuestions from './ShadowWorkQuestions'
import { PDFDownloadLink} from '@react-pdf/renderer';
import { Spin } from 'antd';
import './Note.css'
import './KnowThyself.css'

import MyDocument from './MyDocument'
import { isMobile } from 'react-device-detect';

export default function KnowThyself() {

    const [opacity, setOpacity] = useState(1)
   
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
    const [displayedQuestions, displayQuestions] = useState([])

    const whichQuestions = () => {
        let questions = []
        if (selectedColor != null) {
            switch (selectedColor.background) {
                case 'red':
                    questions =[
                        'What situations trigger me? Which of my needs to they trigger?', 
                        'What makes me feel secure?', 
                        'What makes me feel unsafe?',
                        'Which of my needs are not being met?',
                        'What activities keep my mind in the present moment?',
                        'How does the food I eat make me feel emotionally? Physically?',
                        'How does the media I consume affect the way I view myself and others?',
                        'Where in my life do I need to be more realistic?',
                        'Write down the moments which you catch yourself on autopilot -- that is, performing actions automatically, while your brain wanders off?',
                        'How do I create stability in my life?',
                        'What makes my life feel unstable?'
    
                    ]
                    displayQuestions(questions)
                    break;
                 case 'orange':
                    questions = [
                        'Write down who you think you should be, and why. Where are these expectations coming from? Who do YOU want to be? Who do you think you are now?',
                        'How do I feel? right now? Name the emotion. Describe the feeling.',
                        'What brings me pleasure? What brings me discomfort?',
                        'How do I find myself avoiding uncomfortable emotions/ situations?',
                        'In what ways do I modify my behavior out of fear of judgement from others?',
                        'How do I express my creativity in my everyday life? How can I inject creativity in my daily life?',
                        'What is my relationship with my body? What are my favorite parts? What parts do I dislike? Why?',
                        'How do I take care of myself?'
                    ]
                    displayQuestions(questions)
                    break;
                case 'yellow':
                    questions = [
                        'What makes me feel small/ vulnerable?',
                        'What does confidence mean to me? What makes me feel confident?',
                        'What is an embarrasing memory that I have? Why is it embarrassing?',
                        'What version of myself would I absolutely adore?',
                        'What would somebody who was in love with me say about me?',
                        'What area of my life feels chaotic? What are the things I can control?',
                        'When have I acted in ways that did not feel true to who I am? Do my actions align with my values?',
                        'What brings me joy? What can I do to cultivate more joy in my daily life?',
                        'In what ways do I empower myself? In what ways do I strive to empower others?',
                        'What is one of the best compliments I have received? Why does this compliment touch my soul?',
                        'How do I handle criticism? How can I support myself to handle criticsm a little better?',
                        'Write a letter to your younger self. Think about the reasons why they might be hurting. What would you tell them to ease their hurt?'
    
                    ]
                    displayQuestions(questions)
                    break;
                case 'green':
                    questions = [
                        'Do you feel loved? Why/ Why not?',
                        'In what ways do you find that you isolate yourself from others? Why do you think you do this? What does this isolation accomplish? In what ways does it help your growth? In what ways does it hurt your growth?',
                        'What does unconditional love mean to me? In what ways can I extend this to myself?',
                        'What makes me shut down?',
                        'How can I make myself feel better when I am overwhelmed?',
                        'Is it easier for me to give or to receive? Why?',
                        'What do I need to forgive myself for?',
                        'In what ways do I reject myself?',
                        'In what ways do I punish myself? What do I get out of self punishment?',
                        'What am I passionate about?',
                        'Do I feel worthy of unconditional love? Why/ Why not?',
                        'How can I be more compassionate to myself?',
                        'How can I be more compassionate towards others?',
                        'What role does my upbringing play in my perception of love?'
    
                    ]
                    displayQuestions(questions)
                    break;
                 case 'blue':
                    questions=[
                        'Do I find myself with social anxiety? What thoughts do I think trigger it? How does my social anxiety affect my behavior?',
                        'Do I have difficulty making my own decisions? What makes me question my decision making?',
                        'What do I feel like yelling? Why?',
                        'In what ways do I limit my self expression?',
                        'In what ways do I find myself limiting other people`s creative expression?',
                        'What is something I want to say out loud but feel like I cant?',
                        'What is my favorite form of communication?',
                        'What is my favorite form of creative expression?',
                        'How do I release bottled up tension?',
                        'What lights me up when I speak about it? How do I feel when other people are not listening to me?',
                        'Do I feel disconnected from others? How?',
                        'Who/ What do I love talking to? Why?',
                        'How can I strengthen my voice without restricting anybody else`s?',
                        `Where can I take accountability for my behavior? Why haven't I?`
                    ]
                    displayQuestions(questions)
                    break;
                case 'indigo':
                    questions = [
                        'As I sit in silence with myself. What thoughts arise? How do these thoughts make me feel? Do they trigger me? Do they soothe me? Is there a pattern/ theme across these thoughts?',
                        'Which of my thoughts feel intrusive? How do they affect my relationship with myself? How do they affect my relationship with others?',
                        'What is my relationship with my intuition? Do I trust my inner knowledge? Why/ Why not?',
                        'List the times you had a gut feeling that turned out to be right.',
                        'Visualize the life you would like to live. Ask yourelf `What do I want?` Do your thoughts propel you toward this lifestyle, or do they work against you?',
                        'Where have I not been completely honest with myself in order to avoid feeling shame?'
    
                    ]
                    displayQuestions(questions)
                    break;
                case 'violet':
                    questions = [
                        'What thoughts do I find myself identifying with?',
                        'How can I approach intrusive thoughts in a way that diminishes their power over my state of mind?',
                        'Which of my thoughts have a positive impact on my life? Which of my thoughts negatively impact the quality of my life?',
                        'What am I grateful for?',
                        'What parts of myself do I reject? How can I go about healing these parts?',
                        'What do I believe in?',
                        'When have I felt powerless about an outcome? Do I find that I let these situations dictate my behavior? How can I make sure to control my responses so that I am not blindly reacting?',
                        'What are my fears?'
    
                    ]
                    displayQuestions(questions)
                    break;                                     
                           
                default:
                    break;
            }
        }
    }

    useEffect(() => {whichQuestions()}, [selectedColor])
    
    const addToQuestions = (question) => {
        let duplicate = selectedQuestions.includes(question)
        if (selectedQuestions.length < 3 && !duplicate ){
        selectQuestion([...selectedQuestions, question])
       }
       else if (selectedQuestions.length ===3){
        (alert(`Focus on the three questions you already have so that you can get the most out of this exercise. Don't spread yourself too thin!`))
        }
    }

    
    
    const makeCircles = () => {
        return colors.map(
            (color, i) => {
                return (
                    <div key={i} style={{border:'1em double', borderRadius:'50%', borderColor: color.background}}
                         onClick={()=> {
                        setOpacity(1)
                        selectColor(color) }} >
                        <div id='innerCircle' key={i}> </div> 
                    </div>
                )
            }
        )
    }

    const buttonStyle= {
        margin: '1%',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '10%',
        border: 'none',
        padding:'1%'
    }

    const ref = React.useRef();


    return(
        <div style={{textAlign:'center'}}>
            <div style={{ padding:'1%',  marginBottom: '2%',color:'white', fontSize:'large', backgroundColor:'black', fontFamily:'khand'}}> <i>Who</i>  are you?<br/> <b>Select a mirror</b>  to see journaling prompts that will guide you through your self discovery. </div>
      
           <div style={{    backgroundColor: 'blanchedalmond'}}>
     
            <div style={{ display: 'flex', justifyContent:'center', paddingTop:'5%', flexWrap:'wrap'}}>

            {makeCircles()}

      
 
            </div>
            {
                selectedQuestions.length>0? 
                     <div style={{margin:'1%'}}> 
                        <div style={{marginBottom:'1%'}}>
                        You have selected <b>{selectedQuestions.length}</b> questions. 
                        </div>
                        <br/>
                        <PDFDownloadLink document={<MyDocument quote={ref.current?.innerText} questions={selectedQuestions} />} fileName="Self-Centered-Know-Yourself.pdf">
                         {({ blob, url, loading, error }) =>
                        loading ? <Spin/> : <span style={{color:'white', borderRadius:'20%', backgroundColor:'black', padding:'1%', maxWidth:'10em', textAlign:'center'}}>Done</span>
                            }
                        </PDFDownloadLink> </div>: null
            }

            {
                ((displayedQuestions.length>0))? <ShadowWorkQuestions questions={displayedQuestions} selectedQuestions={selectedQuestions} addToQuestions={addToQuestions}  color={selectedColor}/> : null
            }
   
            <div>
            </div>
            <p ref={ref} style={{color:'Teal', padding:'3%', fontStyle:'sans-serif'}}>
                   
               
                
                     “Knowing yourself is the beginning of all wisdom.” 
                  
                </p>
                
                
            </div>
            <div id='footer'>
            {
                (selectedColor && isMobile)?    
                   
                <p id='note' style={{opacity:opacity}}>
                   <a href='#ShadowWorkQuestions' onClick={()=> setOpacity(0.3)}> Prompts ⇩</a> 
                </p>
                :
                null
            } 
             </div>
        </div>
    )
}

/**
 * 
 * Refer to Needs and Feelings Inventory to explore common themes within your answers to the selected questions.
 * 
 */