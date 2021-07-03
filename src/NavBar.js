import React from 'react';
import { isMobile } from 'react-device-detect';
import './NavBar.css'


export default function NavBar() {

    const paddingTopNav = () => {
        if (isMobile) {
            return 0
        }
        else{
            return '30px'
        }
    }

    return (
        <div  style={{textAlign:'center', paddingTop:paddingTopNav()}}>
             <div style={{ minWidth:'100px', borderTopStyle:'groove', borderTopColor: '#FCB635', borderTopWidth:'1px'}}> 
                        </div>
                        <span  style={{fontWeight:'bold'}}>
                            <span><a href='/' id='action'> Build Tarot Intuition </a></span>
                            <span><a href='/' id='action'> Request Reading </a></span>
                            <span><a href='/' id='action'> Dettachment Meditation </a></span>
                        </span>
                        <div style={{paddingBottom:'3%', minWidth:'100px', borderTopStyle: 'groove' , borderTopColor: '#FCB635', borderTopWidth:'1px'}}> 
                        </div>
        </div>
    )
}