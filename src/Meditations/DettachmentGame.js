import React, { useEffect, useRef, useState } from 'react'

import './DettachmentGame.css'

export default function DettachmentGame(){
    const elementRef = useRef()
//   const makeClones = () => {
//       return(
//         <div className='roadLines'>
//         <div className="roadLine1"></div>
//         <div className="roadLine1"></div>
//         <div className="roadLine1"></div>
//         <div className="roadLine1"></div>
//         <div className="roadLine1"></div>
//         <div className="roadLine1"></div>
//         <div className="roadLine1"></div>
//         <div className="roadLine1"></div>

//    </div>
//       )
//   }
    const [height, setHeight] = useState(0)
    
    useEffect(()=>{
    
         const roadRef = elementRef.current
         setHeight(roadRef.getBoundingClientRect().height)
         console.log(height)
    }, [height])


    return(
        <div className='road'>
           <div id='orinal' className='roadLines' ref={elementRef}>
                <div className="roadLine1"></div>
                <div className="roadLine1"></div>
                <div className="roadLine1"></div>
                <div className="roadLine1"></div>
                <div className="roadLine1"></div>
                <div className="roadLine1"></div>
                <div className="roadLine1"></div>
                <div className="roadLine1"></div>

           </div>
    
        </div>
    )
}