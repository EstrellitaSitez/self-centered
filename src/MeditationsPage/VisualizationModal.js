import Modal from 'antd/lib/modal/Modal'
import React, {useState} from 'react'
import './VisualizationModal.css'


export default function VisualizationModal(props){

    const [visible, setVisibility] = useState(true)
    let url = props.url


    const handleCancel = e => {
        setVisibility(false)
        props.unselectURL()
    
      };


  return(
    <Modal
        visible={visible}
        closable= {true}
        onCancel={handleCancel}
        footer= {null}
    >
            <video autoPlay controls loop style={{width:'100%'}}>  <source src={url}
            type="video/mp4"/>

            </video>
    </Modal>
  )
}