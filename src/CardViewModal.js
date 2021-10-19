import React, { useState } from 'react';
import { Divider, Modal } from 'antd';
import CloseIcon from './CloseIcon';
import CardViewForm from './CardViewForm';

import './CardViewModal.css'




  function CardViewModal(props){

    const [visible, setVisibility] = useState(true)


  const handleCancel = e => {
    setVisibility(false)
    props.unselectImage()

  };

  const addToSpread = (notes) => {
    let imageSRC = props.image.source
    let imageName = props.image.name.toUpperCase()
    props.addToSpread(imageName, imageSRC, notes)
  }

  const closeModal = () => {
    setTimeout(
      () => {
        setVisibility(false)
      }, 500
    )
  }

  //  Should have a place where you can write down your observations and send them to your email.
    return(
        <div>
        <Modal
            style= {{top:0, fontWeight:'bold', fontFamily: 'sans-serif', textAlign:'center', width:'fit-content', fontFamily:'Khand'}}
          visible={visible}
          closable= {true}
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
          <div style={{display:'flex', flexDirection:'row', textAlign:'center'}}>
              <img src={props.image.source} style={{ width:'50%', height:'50%'}}/>
              <div style={{display:'flex', flexDirection:'column', marginTop:'5%', marginLeft:'5%'}}>
                <p style={{color:'black'}}>
                  <ul>
                   <li>What vibes do I get from the scene shown on the card?</li> 
                   <li>What figure/ symbol in this card draws my attention?</li>
                   <li>How would I feel if I were this figure/ symbol?</li> 
                   <li>Would I feel happy? Safe? Expansive? Restricted? Powerful? Vulnerable?</li> 
                   <li>What do the colors in this card tell me about the overall mood? </li>
                   <li> Where are my eyes drawn to? What do these items represent to me?</li>
                   <br/>
                   </ul>     
                </p>
                <CardViewForm closeModal={closeModal} addToSpread={addToSpread}/>
              </div>
              
          </div>
        </Modal>
      </div>
    )


}


export default CardViewModal