import React, { useState } from 'react';
import { Modal } from 'antd';
import CloseIcon from './CloseIcon';




  function CardViewModal(props){

    const [visible, setVisibility] = useState(true)


  const handleCancel = e => {
    setVisibility(false)
    props.unselectImage()

  };

    console.log(props)
    return(
        <div >
        <Modal
            style= {{top:0, fontWeight:'bold', fontFamily: 'Rajdhani', textAlign:'center'}}
          visible={visible}
          closable= {true}
          onCancel={handleCancel}
          maskStyle={{backgroundColor:'black', width:'98vw', marginLeft:'auto', marginRight:'auto', marginTop:0}}
          width='100%'
          bodyStyle={{backgroundColor:'teal'}}
          footerStyle={{backgroundColor:'teal'}}
          footer= {null}
          closeIcon= {<CloseIcon/>}
        >
          <h1 style={{color:'white'}}>{props.image.name.toUpperCase()}</h1>
          <img src={props.image.source} style={{ width:'80vw', height:'100vh'}}/>
        </Modal>
      </div>
    )


}


export default CardViewModal