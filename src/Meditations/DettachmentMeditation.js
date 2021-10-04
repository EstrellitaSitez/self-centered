import { Button } from 'antd';
import React, {useState} from 'react';

import DettachmentGame from './DettachmentGame';


export default function DettachmentMeditation(){

    const [started, start] = useState(false)

    const containerDivStyle={
        marginLeft:'6em',
        marginRight:'6em',
        textAlign:'center'
    }

      

    return(
        <div style={containerDivStyle}>
            {
               started? <DettachmentGame/> : 
               <div>
                   <p>
                      Take your mind on a walk. Much like a puppy, your mind will get distracted and try to pull the leash (your focus) in a different direction. The goal here is to notice <i>what</i> your mind is getting distracted by. Watch out for any patterns in these distractions.
                   </p>
                   <Button type='primary' onClick={()=> start(true)}>Start Walk</Button>
                </div>
            }
        </div>
    )
    
}

// Animation will be you retreating inward to your heart with every breath
//instructions under the video. this way you can translate the instructions
//we'll start with a quick body scan, imagine yourself taking up space in your body --> as if you're trying on a new suit and putting it on
// now picture yourself shrinking into your heart
// breath3 in slow for about 20 seconds .. breathe out slow for about 20 seconds