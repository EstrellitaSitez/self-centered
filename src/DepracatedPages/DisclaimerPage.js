import React from 'react'
import disclaimer from './Assets/Disclaimer/disclaimer.png'

export default function DisclaimerPage(){
    return(
        <div style={{alignItems:'center', display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <img src={disclaimer} style={{width: "90vw"}}/>
            <div style={{color:'black', textAlign:'center', display:'block', fontFamily:'Rajdhani'}}>
                <h6 style={{color:'teal', fontWeight:'bold'}}>DISCLAIMER</h6>
                <p>Before applying something to your life, meditate on it. "Is this something that would improve myyy life, or is this something that seems to improve others'?" </p>
                <p>
                   I will try to offer you a different perspective, but I am a stranger, afterall.
                </p>
                <p>If what I'm saying resonates, make changes to your life as you see fit. Slow and steady, like the Tortoise.</p>
                <p style={{fontSize:'small', fontWeight:'bold'}}>***My Tarot readings are for entertainment purposes only yada-yada-yada***</p>
            </div>
        </div>
    )
}