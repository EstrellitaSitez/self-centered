import React from 'react'
import { Divider } from 'antd'

export default function NeedsInventory () {

    const connection = [
        'acceptance',
        'affection',
        'appreciation',
        'belonging',
        'cooperation',
        'communication',
        'closeness',
        'community',
        'companionship',
        'compassion',
        'consideration',
        'consistency',
        'empathy',
        'inclusion',
        'intimacy',
        'love',
        'mutuality',
        'nurturing',
        'respect',
        'self respect',
        'safety',
        'security',
        'stability',
        'support',
        'to know and be known',
        'to see and be seen',
        'to understand',
        'be understood',
        'trust',
        'warmth'
    ]

    const physicalWellBeing= [
        'air',
        'food',
        'movement/exercise',
        'rest/sleep',
        'sexual expression',
        'safety',
        'shelter',
        'touch',
        'water'
    ]

    const honesty = [
        'authenticity',
        'integrity',
        'presence'
    ]   

    const play = [
        'joy',
        'humor'
    ]

    const peace = [
        'beauty',
        'communion',
        'ease',
        'equality',
        'harmony',
        'inspiration',
        'order'
    ]

    const autonomy = [
        'choice',
        'freedom',
        'independence',
        'space',
        'spontaneity'
    ]

    const meaning = [
        'awareness',
        'celebration of life',
        'challenge',
        'clarity',
        'competence',
        'consciousness',
        'contribution',
        'creativity',
        'discovery',
        'efficacy',
        'effectiveness',
        'growth',
        'hope',
        'learning',
        'mourning',
        'participation',
        'purpose',
        'self-expression',
        'stimulation',
        'to matter',
        'understanding'
    ]

    const listNeeds = (needsList) =>{
        return (
            needsList.map(
                (need, i) => {
                    return (
                        <li key={i}> <span  style={{color:'teal', fontFamily:'Rajdhani', fontWeight:'bold'}}> {need} </span> </li>
                    )
                }
            )
        )
    }
    return (
        <div>

            <div style={{backgroundColor:'teal', color:'white', textAlign:'center', fontFamily:'Khand', fontSize: 'Large'}}>
                Inventory of Needs
            </div>

            <Divider/>

            <div style={{color:'black'}}>
                When we feel "triggered" by a situation, it might be likely that this event is threatening some our needs. Similarly, when we respond positively to situations or people, it might be likely that they fulfill some of our needs. Review the list below to gain more awareness of where your emotions are coming from. 
            </div>

            <Divider/>

            <div className = 'row'>

            <div className="col-sm">
                CONNECTION
                {listNeeds(connection)}
                </div>

            <div className="col-sm">
                MEANING
                {listNeeds(meaning)}
                </div>

            <div className="col-sm" >

                    <div className='row'>
                        <div className="col-sm"  style={{color:'black'}}>
                        AUTONOMY
                        {listNeeds(autonomy)}
                        </div>
                        
                    </div>
                    <div className='row'>
                          <div className="col-sm"  style={{color:'black'}}>
                        PEACE
                        {listNeeds(peace)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm"  style={{color:'black'}}>
                        PLAY
                        {listNeeds(play)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm"  style={{color:'black'}}>
                        HONESTY
                        {listNeeds(honesty)}
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-sm"  style={{color:'black'}}>
                        PHYSICAL WELL-BEING
                        {listNeeds(physicalWellBeing)}
                        </div>
                    </div>
                </div>


            </div>
            
            <div style={{textAlign:'center', marginTop:'3%', color:'black'}}>
            (c) 2005 by Center for Nonviolent Communication <br/>
            Website: www.cnvc.org Email: cnvc@cnvc.org<br/>
            Phone: +1.505-244-4041      
            </div>
        </div>
    )
}