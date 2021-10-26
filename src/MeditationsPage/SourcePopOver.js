import React from 'react'
import { Tooltip, Button } from 'antd';
import { isMobile } from 'react-device-detect';


export default function SourcePopOver(props) {

    return (
      <Tooltip
      color='yellow'
      autoAdjustOverflow
      title={props.title}
      >

           <Button style={{
               color:'gainsboro',
               bottom:0,
               left:0,
               position: 'relative'
           }} type="text">{props.buttonText}</Button>
      </Tooltip>
    );
  
}
