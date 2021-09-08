import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import './Dettachment.css'

export default function DettachmentMeditation(){

    const meditation = [
        "Take a deep breath",
        "Place your hand on your stomach",
        "Feel it expand as it fills with air",
        "Exhale",
        "Slowly",
        "Breathe in again",
        "Find your rhythm",
        "With every exhale, feel yourself elevate",
        "You're rising higher and higher"
    ]

    const [spanDisplay, setDisplay] = useState('block')
    const [seconds, setSeconds] = useState(15)

 
   
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
             Your meditation will start in <b>{seconds}</b>s.
             </span>
            
            <span className='medText' style={{display: showMeditation()}}>
                hi
            </span>

        </div>
        </div>
    )
}

// Animation will be you retreating inward to your heart with every breath
//instructions under the video. this way you can translate the instructions
//we'll start with a quick body scan, imagine yourself taking up space in your body --> as if you're trying on a new suit and putting it on
// now picture yourself shrinking into your heart
// breath3 in slow for about 20 seconds .. breathe out slow for about 20 seconds