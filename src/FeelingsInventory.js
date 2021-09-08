import { Divider } from 'antd'
import React from 'react'

import './Note.css'


export default function FeelingsInventory(){

    const satisfiedNeeds = {
        'AFFECTIONATE': [
            'compassionate',
            'friendly',
            'loving',
            'open-hearted',
            'sympathetic',
            'tender',
            'warm'
        ],
        'ENGAGED': [
            'absorbed',
            'alert',
            'curious',
            'engrossed',
            'enchanted',
            'entranced',
            'fascinated',
            'interested',
            'intrigued',
            'involved',
            'spellbound',
            'stimulated'
        ],
        'HOPEFUL': [
            'expectant',
            'encouraged',
            'optimistic'
        ],
        'CONFIDENT' : [
            'empowered',
            'open',
            'proud',
            'safe',
            'secure' 
        ],
        'EXCITED' : [
            'amazed',
            'animated',
            'ardent',
            'aroused',
            'astonished',
            'dazzled',
            'eager',
            'energetic',
            'enthusiastic',
            'giddy',
            'invigorated',
            'lively',
            'passionate',
            'surprised',
            'vibrant'
        ],
        'GRATEFUL' : [
            'appreciative',
            'moved',
            'thankful',
            'touched'
        ],
        'INSPIRED' : [
            'amazed',
            'awed',
            'wonder'
        ],
        'JOYFUL' : [
            'amused',
            'delighted',
            'glad',
            'happy',
            'jubilant',
            'pleased',
            'tickled'
        ],
        'EXHILARATED': [
            'blissful',
            'ecstatic',
            'elated',
            'enthralled',
            'exuberant',
            'radiant',
            'rapturous',
            'thrilled'
        ],
        'PEACEFUL': [
            'calm',
            'clear-headed',
            'comfortable',
            'centered',
            'content',
            'equanimous',
            'fulfilled',
            'mellow',
            'quiet',
            'relaxed',
            'relieved',
            'satisfied',
            'serene',
            'still',
            'tranquil',
            'trusting'
        ],
        'REFRESHED' : [
            'enlivened',
            'rejuvenated',
            'renewed',
            'rested',
            'restored',
            'revived'
        ]
       
    }

    const unsatisfiedNeeds = {
        'AFRAID':[
            'apprehensive',
            'dread',
            'foreboding',
            'frightened',
            'mistrustful',
            'panicked',
            'petrified',
            'scared',
            'suspicious',
            'terrified',
            'wary',
            'worried'
        ],
        'ANNOYED' : [
            'aggravated',
            'dismayed',
            'disgruntled',
            'displeased',
            'exasperated',
            'frustrated',
            'impatient',
            'irritated',
            'irked'
        ],
        'ANGRY' : [
            'enraged',
            'furious',
            'incensed',
            'indignant',
            'irate',
            'livid',
            'outraged',
            'resentful'
        ],
        'AVERSION':[
            'animosity',
            'appalled',
            'contempt',
            'disgusted',
            'dislike',
            'hate',
            'horrified',
            'hostile',
            'repulsed'
        ],
        'CONFUSED' : [
            'ambivalent',
            'baffled',
            'bewildered',
            'dazed',
            'hesitant',
            'lost',
            'mystified',
            'perplexed',
            'puzzled',
            'torn'
        ],
        'DISCONNECTED' :[
            'alienated',
            'aloof',
            'apathetic',
            'bored',
            'cold',
            'detached',
            'distant',
            'distracted',
            'indifferent',
            'numb',
            'removed',
            'uninterested',
            'withdrawn'
        ],
        'DISQUIET' : [
            'agitated',
            'alarmed',
            'discombobulated',
            'disconcerted',
            'disturbed',
            'perturbed',
            'rattled',
            'restless',
            'shocked',
            'startled',
            'surprised',
            'troubled',
            'turbulent',
            'turmoil',
            'uncomfortable',
            'uneasy',
            'unnerved',
            'unsettled',
            'upset'
        ],
        'EMBARRASSED' : [
            'ashamed',
            'chagrined',
            'flustered',
            'guilty',
            'mortified',
            'self-conscious'
        ],
        'FATIGUE' : [
            'beat',
            'burnt out',
            'depleted',
            'exhausted',
            'lethargic',
            'listless',
            'sleepy',
            'tired',
            'weary',
            'worn out'
        ],
        'PAIN' : [
            'agony',
            'anguished',
            'bereaved',
            'devastated',
            'grief',
            'heartbroken',
            'hurt',
            'lonely',
            'miserable',
            'regretful',
            'remorseful'
        ],
        'SAD' : [
            'depressed',
            'dejected',
            'despair',
            'despondent',
            'disappointed',
            'discouraged',
            'disheartened',
            'forlorn',
            'gloomy',
            'heavy hearted',
            'hopeless',
            'melancholy',
            'unhappy',
            'wretched'
        ],
        'TENSE' : [
            'anxious',
            'cranky',
            'distressed',
            'distraught',
            'edgy',
            'fidgety',
            'frazzled',
            'irritable',
            'jittery',
            'nervous',
            'overwhelmed',
            'restless',
            'stressed out'
        ],
        'VULNERABLE' : [
            'fragile',
            'guarded',
            'helpless',
            'insecure',
            'leery',
            'reserved',
            'sensitive',
            'shaky'
        ],
        'YEARNING' : [
            'envious',
            'jealous',
            'longing',
            'nostalgic',
            'pining',
            'wistful'
        ]
    }


    const listFeelings = (feeling) =>{
        return (
            <li style={{listStyle:'none'}}> <span style={{fontFamily:'Rajdhani', fontWeight:'bold', color:'white', }}> {feeling} </span> </li>
        )
    }


    const createColumn = (object) => {
        let results =[]
        for (let [category, feelings] of Object.entries(object)) {
            results.push (
                <div style={{display:'inline', margin:'5%', backgroundColor:'teal', padding:'3%'}}>
                   <div style={{color:'white', fontFamily:'Rajdhani', fontWeight:'bold'}}>{category}</div> 
                    <Divider style={{backgroundColor:'white'}}/>
                        {feelings.map((feeling)=>listFeelings(feeling))}
                    

                </div>
            )
        }
        return results
    }

    const makeArrows =()=> {
        let results = []
        for (let i=0; i<11; i++){
             results.push(
                <span>↓</span>
            )
        }
        return results
    }

    return(
        <div>
             <div style={{backgroundColor:'black', color:'white', textAlign:'center', fontFamily:'Khand', fontSize: 'Large'}}>
                Emotions From Satisfied Needs
            </div>  

            <div  style={{ width:'80vw', marginLeft:'10%', marginRight:'10%', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {createColumn(satisfiedNeeds)}
            </div>
               
            <div style={{textAlign:'center', marginTop:'3%'}}>
            (c) 2005 by Center for Nonviolent Communication <br/>
            Website: www.cnvc.org Email: cnvc@cnvc.org<br/>
            Phone: +1.505-244-4041      
            </div>

            <div id='unsatisfied' style={{backgroundColor:'black', color:'white', textAlign:'center', fontFamily:'Khand', fontSize: 'Large', marginTop:'3%'}}>
                Emotions From Unsatisfied Needs
            </div>  

            <div  style={{ width:'80vw', marginLeft:'10%', marginRight:'10%', display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {createColumn(unsatisfiedNeeds)}
            </div>

            <div style={{textAlign:'center', marginTop:'1%'}}>
            (c) 2005 by Center for Nonviolent Communication <br/>
            Website: www.cnvc.org Email: cnvc@cnvc.org<br/>
            Phone: +1.505-244-4041      
            </div>

            <div id='footer'>
             
                     <p id='note'><a href='#unsatisfied'> ...Unsatisfied Needs </a></p>

                   
               

            </div>
            

        </div>
    )

}