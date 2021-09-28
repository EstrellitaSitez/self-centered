import React, { useState } from 'react';
import { Divider, Modal } from 'antd';
import CloseIcon from './CloseIcon';




  function CardViewModal(props){

    const [visible, setVisibility] = useState(true)


  const handleCancel = e => {
    setVisibility(false)
    props.unselectImage()

  };

    console.log(props)
    return(
        <div>
        <Modal
            style= {{top:0, fontWeight:'bold', fontFamily: 'Rajdhani', textAlign:'center', width:'fit-content'}}
          visible={visible}
          closable= {true}
          onCancel={handleCancel}
          maskStyle={{backgroundColor:'rgb(0, 0, 0, 0.7)', width:'98vw', marginLeft:'auto', marginRight:'auto', marginTop:0}}
          width='100%'
          bodyStyle={{backgroundColor:'rgb(83, 173, 173)'}}
          footerStyle={{backgroundColor:'whitesmoke'}}
          footer= {null}
          closeIcon= {<CloseIcon/>}
        >
          <h1 style={{color:'white'}}>{props.image.name.toUpperCase()}</h1>
          <img src={props.image.source} style={{ width:'80vw', height:'100vh'}}/>
          <Divider style={{backgroundColor:'whitesmoke'}}/>
          <p style={{color:'whitesmoke',paddingTop:'1%'}}>
            <li>What vibes do I get from the scene shown on the card?</li> 
            <li>What figure/ symbol in this card draws my attention?</li>
            <li>How would I feel if I were this figure/ symbol?</li> 
            <li>Would I feel happy? Safe? Expansive? Restricted? Powerful? Vulnerable?</li> 
            <li>What do the colors in this card tell me about the overall mood? </li>
            <li> Where are my eyes drawn to? What do these items represent to me?</li>
            <br/>
            <i style={{fontWeight:'400%'}}>Write down your observations.</i>  
          </p>
        </Modal>
      </div>
    )


}


export default CardViewModal