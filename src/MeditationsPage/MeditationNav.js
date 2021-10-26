import React from 'react'
import {LeftOutlined} from '@ant-design/icons'
import { isMobile } from 'react-device-detect'


export default function MeditationNav(){

    const aStyle={
        width:'fit-content',
        marginLeft: isMobile? '': '3em'
    }

    return(
        <div>
            <a style={aStyle} href='/Meditation'><LeftOutlined /> </a>
        </div>
    )
}