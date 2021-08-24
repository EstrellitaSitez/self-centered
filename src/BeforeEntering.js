import React, { useState } from 'react';
import './BeforeEntering.css'

export default function BeforeEntering() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  //modal visible when website first loads

  const handleCancel = () => {
    setIsModalVisible(false)
    window.location='/bye'
  };

  console.log("BEFORE ENTERING")
  return (
    <div >
    <div className={"modal fade" + (isModalVisible? " show d-block" : " d-none")} tabIndex="-1" role="dialog" >
        <div style={{width:'100vw', height:'100vh', backgroundColor:'white', position:'absolute', opacity:0.7}}>

        </div>
        <div className="modal-dialog"  role="document" style={{marginBottom:'auto', marginTop:'20%', fontFamily:'Khand', fontWeight:'bold'}} >
            <div className="modal-content">
                <div className="modal-header" style={{backgroundColor:'black'}}>
                    <h5 className="modal-title" style={{color:'white', fontWeight:'bold'}}>Hey, friend</h5>
                    <button type="button" className="close " onClick={()=> setIsModalVisible(false)}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={{color:'teal'}}>
      
                    <div style={{textAlign:'center'}}>
                    <p style={{color:'black'}}>
                    "To live in the world without becoming <br/>
                         aware of the meaning of the world is like<br/>
                         wandering about in a great library <br/>
                         without touching the books."
                    </p>
                    </div>
                    <p>
                        In order to see this world for what it really is, we must first begin to see ourselves for who we really are. Get ready to embark on a journey of <i>self</i> exploration.
                    </p>

                </div>
                <div className="modal-footer" >
                    <button type="button" className="btn okay" onClick={()=> setIsModalVisible(false)}>I'm Ready</button>
                    <button type="button" className="btn nah" onClick={()=>handleCancel()}>Nah, F*ck Growth</button>
                </div>
            </div>
        </div>

    </div>
</div>
  );
};

// Modal is about getting to know thyself

