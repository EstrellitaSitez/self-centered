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
        <div style={{background:'#FCB635', textAlign:'center', position:'relative', width:widthSH(), minHeight:'10vh'}}>
               <h1 style={{fontWeight:'bold', fontSize:'6vh', color: '#45A29E', paddingTop:'1%'}}>
                        E S T R E L L I T A {isMobile? <br/> : <span>&nbsp;</span>} T A R O T
                    </h1>
        </div>
    )

}