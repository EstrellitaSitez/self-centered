import { Button } from 'antd';
import React, {useState} from 'react';
import {SoundOutlined, StopOutlined} from '@ant-design/icons'
import DettachmentGame from './DettachmentGame';

import nightSounds from '../Assets/MeditationSounds/nightSounds.wav'
import { isMobile } from 'react-device-detect';
import SourcePopOver from './SourcePopOver';


export default function DettachmentMeditation(){

    const [started, start] = useState(false)
    const [soundSelected, selectSound] = useState(false)

    const containerDivStyle={
        marginLeft:'6em',
        marginRight:'6em',
        textAlign:'center'
    }

    const iconStyle= {
        marginLeft: '3em',
        float:'left',
        marginTop:'2%',
        display:'block',
        width:'fit-content',
        cursor: 'pointer'
    }

    const audioPopOver =  <div>Background audio track provided by <a href='https://noises.online' title='Noises.Online' target='_blank'>Noises.Online</a> under a <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0 BY</a> license.</div>


    return(
        <>
              {
                (soundSelected)?
                <audio autoPlay loop>
                <source src={nightSounds} type='audio/wav'></source>
             </audio>
                :
                null
            }
           {
                started? 
                <div style={{display:'flex', flexDirection:'column', color:'gainsboro'}}>
                            <div className='icon' style={iconStyle} >
                            <SoundOutlined onClick={()=>selectSound(!soundSelected)} />
                            </div>
            
                </div>
            
                : 
                null
            }

        <div style={containerDivStyle}>
      
         
            {
               started?
             
                    <DettachmentGame/>
             
                 : 
               <div>
                   <p>
                      Take your mind on a walk. Much like a puppy, your mind will get distracted and try to pull the leash (your focus) in a different direction. The goal here is to notice <i>what</i> your mind is getting distracted by. Watch out for any patterns in these distractions.
                   </p>
        
                   <Button type='primary' disabled={isMobile? true: false} onClick={()=> start(true)}>Start Walk</Button>
                   {
                       isMobile?
                       <div style={{color:'red'}}>
                       This feature is not available on mobile <br/>
                       </div>
                        :
                        null
                   }
                </div>
            }
         {/* Removing audio source popover from game screen */}
            {
                started? null: <SourcePopOver title={audioPopOver} buttonText='Audio' />
            }
             
        </div>
        </>
    )
    
}

// Animation will be you retreating inward to your heart with every breath
//instructions under the video. this way you can translate the instructions
//we'll start with a quick body scan, imagine yourself taking up space in your body --> as if you're trying on a new suit and putting it on
// now picture yourself shrinking into your heart
// breath3 in slow for about 20 seconds .. breathe out slow for about 20 seconds