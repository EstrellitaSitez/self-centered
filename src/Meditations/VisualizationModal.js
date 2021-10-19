import Modal from 'antd/lib/modal/Modal'
import React, {useState} from 'react'
import ReactPlayer from 'react-player/lazy'
import './VisualizationModal.css'


export default function VisualizationModal(props){

    const [visible, setVisibility] = useState(true)
    let url = props.url


    const handleCancel = e => {
        setVisibility(false)
        props.unselectURL()
    
      };

      console.log(props.url)

  return(
    <Modal
        visible={visible}
        closable= {true}
        onCancel={handleCancel}
    >
            <video autoPlay controls loop style={{width:'100%'}}>  <source src={url}
            type="video/mp4"/>

            </video>
    </Modal>
  )
}