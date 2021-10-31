import React from 'react'
import {LeftOutlined} from '@ant-design/icons'
import { isMobile } from 'react-device-detect'


export default function MeditationNav(){

    const aStyle={
        width:'fit-content',
        marginLeft: isMobile? '': '3em'
    }
    const baseUrl = process.env.REACT_APP_BASE_URL
    return(
        <div>
            <a style={aStyle} href={baseUrl+'/Meditation'}><LeftOutlined /> </a>
        </div>
    )
}