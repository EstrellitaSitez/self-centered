import React, {useState, useEffect} from 'react'
import { isMobile } from 'react-device-detect'
import './GroundingMeditation.css'

export default function GroundingMeditation(){
  

    const [spanDisplay, setDisplay] = useState('block')
    const [seconds, setSeconds] = useState(60)

 
   
    useEffect(
        () => {
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
              } else {
                setDisplay('none');
              }
        }, [seconds, spanDisplay]
    )

    const showMeditation = () => {
        if (spanDisplay==='block'){
            return 'none'
        } else {
            return 'block'
        }
    }

 

    return (
        <div style={{textAlign:'center'}}>
        {
            isMobile? '' : <p style={{color:'grey'}}>(scroll to center of circle)</p>
        }
        <div id={'dettachment' } >
             <span className='medText' style={{display:spanDisplay}}>
               {
                (seconds > 50)? `Your meditation will start in ${seconds}s. Take this moment to inhale slowly and deeply` : ''
               }
               </span>
            <span className='medText one' style={{display:spanDisplay, animationDelay:'12s'}}>
               {
                  ( (seconds < 49) && (seconds>30))? 'Place your hand on your abdomen and feel it rise.' : ''
               }
               </span>
            <span className='medText' style={{display:spanDisplay, animationDelay:'32s'}}>
               {
                   (seconds<29 && seconds>15)? 'On exhale, let go for your jaw and drop your shoulders.' : ''
               }
            </span>
            <span className='medText' style={{display:spanDisplay, animationDelay:'46s'}}>
                {
                   (seconds<15 && seconds>6)? 'Make sure you are sitting comfortably. Your meditation will begin shortly.' : ''
               }
             </span>
             <span className='medText' style={{display:spanDisplay, animationDelay:'55s'}}>
                {
                   (seconds<6)? `${seconds}s` : ''
               }
             </span>
 

        </div>
        </div>
    )
}

// 3 minute body scan --> BODY SCAN --> ground our body by acknowledging the physical sensations surrounding our body parts
// Add a fricken back button to each meditation
// breathe into your body parts (bigger ones) /dissolve your smaller body parts as you scan them 
// notice where in our bodies we feel tension/ discomfort

// notice belly rise and fall
// notice heart beat 
//And now, let your attention to expand out to include the entire body as a whole. Bring into your awareness the top of your head down to the bottom of your toes. 