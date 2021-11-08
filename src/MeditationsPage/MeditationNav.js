import React from 'react'
import {LeftOutlined} from '@ant-design/icons'
import { isMobile } from 'react-device-detect'
import { Link } from 'react-router-dom'
  


export default function MeditationNav(){

    const aStyle={
        width:'fit-content',
        marginLeft: isMobile? '': '3em'
    }
    return(
        <div>
              <Link  style={aStyle}  to='/Meditation'><LeftOutlined /> </Link>
        </div>
    )
}