import React, { useEffect, useRef, useState } from 'react'
import { isMobile } from 'react-device-detect'

import './DettachmentGame.css'

export default function DettachmentGame(){
 

// as soon as #original moves a height of .roadline1 height, p
    return(
            isMobile? 
            'Please use a desktop' 
            :
        
        <div className='road'> 
         
        <ul id='orinal' className='roadLines' >
         
       
   
        <li>
             <ul>
             <li >
                 <div className="beginnerRoadLine">
                 </div>
             </li>
             </ul>
         </li>
        
         <li>
             <ul>
             <li >
                 <div className="roadLine1">
                 </div>
             </li>
             </ul>
         </li>
        
         <li>
             <ul>
             <li >
                 <div className="roadLine1">
                 </div>
             </li>
             </ul>
         </li>
        
         <li>
             <ul>
             <li >
                 <div className="roadLine1">
                 </div>
             </li>
             </ul>
         </li>
                
         <li>
             <ul>
             <li >
                 <div className="roadLine1">
                 </div>
             </li>
             </ul>
         </li>   
        
           
         <li>
             <ul>
             <li >
                 <div className="roadLine1">
                 </div>
             </li>
             </ul>
         </li>
                
         <li>
             <ul>
             <li >
                 <div className="roadLine1">
                 </div>
             </li>
             </ul>
         </li>   
        


        </ul>
 
     </div>

            )
}