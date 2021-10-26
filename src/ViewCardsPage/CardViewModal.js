import React, { useState } from 'react';
import { Divider, Modal, Button } from 'antd';
import CloseIcon from '../CloseIcon';
import CardViewForm from './CardViewForm';

import './CardViewModal.css'
import { isMobile } from 'react-device-detect';




  function CardViewModal(props){

    const [visible, setVisibility] = useState(true)
    const [editorShowing, showEditor] = useState(false)

  const handleCancel = e => {
    setVisibility(false)
    props.unselectImage()

  };

  const addToSpread = (notesHtmlObj) => {
    let imageSRC = props.image.source
    let imageName = props.image.name.toUpperCase()
    props.addToSpread(imageName, imageSRC, notesHtmlObj)
  }



  //  Should have a place where you can write down your observations and send them to your email.
    return(
        <div>
        <Modal
            style= {{top:0, fontWeight:'bold', fontFamily: 'sans-serif', textAlign:'center', width:'fit-content', fontFamily:'Khand'}}
          visible={visible}
          onCancel={handleCancel}
          maskStyle={{backgroundColor:'rgb(0, 0, 0, 0.7)', width:'98vw', marginLeft:'auto', marginRight:'auto', top:0}}
          width='100%'
          bodyStyle={{backgroundColor:'whitesmoke', margin:'10%', borderLeft: '1px groove rgb(83, 173, 173)', borderRight:'1px groove rgb(83, 173, 173)'}}
          footerStyle={{backgroundColor:'whitesmoke'}}
          footer= {null}
          closeIcon= {<CloseIcon/>}
        >
          <h1 style={{color:'rgb(83, 173, 173)', fontFamily:'Khand'}}>{props.image.name.toUpperCase()}</h1>
          <Divider />
          <div style={{display:'flex', flexDirection:(isMobile? 'column': 'row'), textAlign:'center'}}>
              <img src={props.image.source} style={{ width: (isMobile? '100%': '60%'), height:(isMobile? '100%': '60%')}}/>
              <div style={{display:'flex', flexDirection:'column', marginTop:'5%', alignItems:'center', textAlign:'center'}}>
                 
                  <ul style={{paddingLeft:0}}>
                   <li>What vibes do I get from the scene shown on the card?</li> 
                   <li>What figure/ symbol in this card draws my attention?</li>
                   <li>How would I feel if I were this figure/ symbol?</li> 
                   <li>Would I feel happy? Safe? Expansive? Restricted? Powerful? Vulnerable?</li> 
                   <li>What do the colors in this card tell me about the overall mood? </li>
                   <li> Where are my eyes drawn to? What do these items represent to me?</li>
                   <br/>
                   </ul>     
             
                {/* show option to show cardform on mobile */}
                {
                  isMobile? <Button type='primary' onClick={()=> showEditor(!editorShowing)}> {editorShowing? 'Hide Editor' : 'Show Editor'} </Button> 
                          :
                  <CardViewForm closeModal={handleCancel} addToSpread={addToSpread}/>
                }

                {
                  editorShowing?  <CardViewForm closeModal={handleCancel} addToSpread={addToSpread}/> : null
                }
                
              </div>
              
          </div>
        </Modal>
      </div>
    )


}


export default CardViewModal