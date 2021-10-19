import React, {useState} from 'react'

import { Input, Button } from 'antd';

const { TextArea } = Input;


export default function CardViewForm(props) {

    const [notes, takeNotes] = useState('')

    const onChange = e => {
        console.log('Change:', e.target.value);
        let text = e.target.value
        takeNotes(text)
      };
      
    const addToSpread = () => {
        props.addToSpread(notes)
    }
  
    const handleClick = () => {
        addToSpread()
        props.closeModal()
    }

    return(
        <div style={{margin:'10%', marginTop:'0', marginLeft:'auto', marginRight:'auto'}}>
            <p style={{color:'rgb(51, 51, 0)'}}> Record your observations below:</p> 
            <TextArea value={notes} autoSize={{minRows:10}} showCount maxLength={500} onChange={onChange} />
                <Button onClick={()=>handleClick()} type="primary" ghost style={{margin:'10%'}}>
                     Save Observation 
                </Button>
        </div>
    )
}