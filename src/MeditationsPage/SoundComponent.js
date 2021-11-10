import React, { useEffect, useState } from 'react' 
import {SoundOutlined} from '@ant-design/icons'

export default function SoundComponent(props){

    const [selected, setSelected] = useState(false)

    //when another sound is clicked, i want this sound to  unselect.

    const handleClick = () => {
        if ((props.soundSelected === null)) {
            props.selectSound(props.sound)
            setSelected(!selected)
        }
        else if (selected) {
            props.selectSound(null)
            setSelected(false)
        }
    }

    return(
        <td  > 
             <SoundOutlined  style={{color: selected? 'teal' : 'black'}} onClick={handleClick} />
        </td>
    )
}