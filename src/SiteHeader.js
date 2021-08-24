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
        <div style={{background:'white', textAlign:'center', position:'relative', width:widthSH(), paddingTop:'1%', paddingBottom:'0'}}>
            <a href= '/'>
               <h1 style={{ color: 'black', paddingTop:'1%', fontWeight:'lighter'}}>
                        E S T R E L L I T A {isMobile? <br/> : <span>&nbsp;</span>} T A R O T
                    </h1>
            </a>
        </div>
    )

}