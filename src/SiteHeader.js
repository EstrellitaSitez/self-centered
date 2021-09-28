import { Divider } from 'antd';
import React from 'react';
import { isMobile } from 'react-device-detect';


export default function SiteHeader(){

    const widthSH = () => {
        if (isMobile) {
            return '100%'
        }else{
            return '100vw'
        }
    }


    return(
        <div style={{background:'white', fontFamily:'Khand', textAlign:'center', position:'relative', width:widthSH(), paddingTop:'1%', paddingBottom:'0'}}>
            <a href= '/'>
               <h1 style={{ color: 'black', paddingTop:'1%', height:'100%'}}>
                        S E L F  {isMobile? <br/> : <span>&nbsp;</span>} C E N T E R E D
                    </h1>
            </a>
           
               
               <p>
                 <i>“Knowing yourself is the beginning of all wisdom.” </i>
                </p>
                <p>— Aristotle</p>

                <Divider/>
                
        </div>
    )

}