import React, {useState, useEffect} from 'react'
import { isMobile } from 'react-device-detect'
import {SoundOutlined, StopOutlined} from '@ant-design/icons'
import { Link } from 'react-router-dom'

import singingBowl from '../Assets/MeditationSounds/singingBowl.wav'
import './GroundingMeditation.css'
import SourcePopOver from './SourcePopOver'



export default function GroundingMeditation(){
  

    const [spanDisplay, setDisplay] = useState('block')
    const [seconds, setSeconds] = useState(300)
    const [audioEnabled, enableAudio] = useState(false)

 
   
    useEffect(
        () => {
            if ((seconds > 0 )) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
              } else {
                setDisplay('none');
              }
        }, [seconds, spanDisplay]
    )

    // const showMeditation = () => {
    //     if (spanDisplay==='block'){
    //         return 'none'
    //     } else {
    //         return 'block'
    //     }
    // }

    let sec = seconds%60
    let min = seconds/60

    const audioPopOver =  <div>Background audio track provided by   <Link   to='https://noises.online' title='Noises.Online' target='_blank'>Noises.Online</Link> under a   <Link   to='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0 BY</Link> license.</div>


    return (
        <div className='container' >
        {
            ((!isMobile))? <p style={{color:'gainsboro'}}>(scroll to center of circle)</p> : ''
        }
         {
            audioEnabled?
               <StopOutlined onClick={()=>enableAudio(!audioEnabled)} />
            :
               <SoundOutlined onClick={()=>enableAudio(!audioEnabled)}/>
         }
         <br/>
        
        {
           (audioEnabled)? 
               <div>
                  <audio autoPlay loop>
                     <source src={singingBowl} type='audio/wav'></source>
                  </audio>
              </div>
              :
              null

        }
       <span style={{color:'teal', fontFamily:'Khand'}}>Time: {Math.round(min)}m:{Math.round(sec)}s</span>
       <div className='dettachment'>

       </div>
        <div className='dettachmentText'>
             <span className='medText' style={{display:spanDisplay}}>
               {
                (seconds > 240)? `Take this moment to inhale slowly and deeply.` : ''
               }
               </span>
            <span className='medText one' style={{display:spanDisplay, animationDelay:'60s'}}>
               {
                  ( (seconds < 240) && (seconds>225))? 'Place your hand on your abdomen and feel it rise.' : ''
               }
               </span>
            <span className='medText' style={{display:spanDisplay, animationDelay:'75s'}}>
               {
                   (seconds<225 && seconds>215)? 'And fall.' : ''
               }
            </span>
            <span className='medText' style={{display:spanDisplay, animationDelay:'85s'}}>
                {
                   (seconds<215 && seconds>205)? 'Make sure you are sitting comfortably in your seat' : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'95s'}}>
                {
                   (seconds<205 && seconds>195)? `Inhale deeply and slowly.` : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'105s'}}>
                {
                   (seconds<195 && seconds>190)? `Pause. ${seconds-190}` : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'110s'}}>
                {
                   (seconds<190 && seconds>180)? `Exhale slowly` : ''
               }
             </span>
{/* UPPER BODY */}
             <span className='medText' style={{display:spanDisplay, animationDelay:'120s'}}>
                {
                   (seconds<180 && seconds>173)? `As you continue breathing, make note of how your shoulders feel.` : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'127s'}}>
                {
                   (seconds<173 && seconds>167)? `Do they feel heavy? Tense?` : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'133s'}}>
                {
                   (seconds<167 && seconds>160)? `Relax your shoulders. ` : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'140s'}}>
                {
                   (seconds<160 && seconds>150)? `Feel your Left shoulder blade dissolve. Breathe.` : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'150s'}}>
                {
                   (seconds<150 && seconds>140)? `Feel your Right shoulder blade dissolve. Breathe.` : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'160s'}}>
                {
                   (seconds<140 && seconds>127)? `Straighen your spine. Relax your shoulders. Breathe slowly into your midback. Feel it exapnd.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'173s'}}>
                {
                   (seconds<127 && seconds>117)? `Let this sensation travel down your spine to your lowerback. Feel it dissolve.` : ''
                }
             </span>
{/* LOWER BODY */}
             <span className='medText' style={{display:spanDisplay, animationDelay:'183s'}}>
                {
                   (seconds<117 && seconds>110)? `Feel the sides of your butt melt into your seat.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'190s'}}>
                {
                   (seconds<110 && seconds>95)? `Notice as your thighs start to melt into the seat, too. Breathe` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'205s'}}>
                {
                   (seconds<95 && seconds>90)? `Try to breathe with your pelvis` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'210s'}}>
                {
                   (seconds<90 && seconds>80)? `Feel your pelvis expand as you breath in slowly and deeply.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'220s'}}>
                {
                   (seconds<80 && seconds>70)? `Feel your pelvis relaxing as you exhale slowly.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'230s'}}>
                {
                   (seconds<70 && seconds>60)? `Notice as your thighs begin to melt into the seat below you.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'240s'}}>
                {
                   (seconds<60 && seconds>50)? `Feel the tension around your knees dissolve.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'250s'}}>
                {
                   (seconds<50 && seconds>40)? `Let that sensation drip down onto your calves and feel your legs loosen up.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'260s'}}>
                {
                   (seconds<40 && seconds>30)? `Feel the tension dissolving around your ankles.` : ''
                }
             </span>

             <span className='medText' style={{display:spanDisplay, animationDelay:'55s'}}>
                {
                   (seconds<30 && seconds>20)? `Dissolve the tension in the soles of your feet. ` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'55s'}}>
                {
                   (seconds<20 && seconds>5)? `On exhale, melt into your seat.` : ''
                }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'55s'}}>
                {
                   (seconds<5 && seconds>0)? `${seconds}` : ''
                }
             </span>


        </div>
        <div style={{marginTop: isMobile? '20%' : 0}}>
        <SourcePopOver title={audioPopOver} buttonText='Audio' />
        </div>
        </div>
    )
}

// 3 minute body scan --> BODY SCAN --> ground our body by acknowledging the physical sensations surrounding our body parts
// Add a fricken back button to each meditation
// breathe into your body parts (bigger ones) /dissolve your smaller body parts as you scan them 
// notice where in our bodies we feel tension/ discomfort
