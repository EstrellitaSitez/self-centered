import React, { useState } from 'react';
import './BeforeEntering.css'

export default function BeforeEntering() {
  const [isModalVisible, setIsModalVisible] = useState(true);

 

  const handleCancel = () => {
    // take to a peace sign page
  };
  console.log("BEFORE ENTERING")
  return (
    <div >
    <div className={"modal fade" + (isModalVisible? " show d-block" : " d-none")} tabIndex="-1" role="dialog" >
        <div style={{width:'100vw', height:'100vh', backgroundColor:'white', position:'absolute', opacity:0.7}}>

        </div>
        <div className="modal-dialog"  role="document" style={{marginBottom:'auto', marginTop:'20%'}} >
            <div className="modal-content">
                <div className="modal-header" style={{backgroundColor:'black'}}>
                    <h5 className="modal-title" style={{color:'white', fontWeight:'bold'}}>Hey, friend</h5>
                    <button type="button" className="close " onClick={()=> setIsModalVisible(false)}>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body" style={{color:'teal', fontWeight:'bold'}}>
                    <p>
                        This site is meant to be used as tool for self exploration. 
                     </p>       
                    <p>
                        The world is seen through <i>your</i> eyes and perceived by <i> your </i> mind. How can you trust your reality without cultivating an awareness of the filters you're looking at it through?
                    </p>
            
                    <p>
                        Please keep in mind this is the ✨internet✨. Use that awareness to discern the information that can be useful if applied to your life.
                    </p>

                    <p>
                        Ready?
                    </p>
                </div>
                <div className="modal-footer" >
                    <button type="button" className="btn okay" onClick={()=> setIsModalVisible(false)}>I'm Ready</button>
                    <button type="button" className="btn nah">Nah</button>
                </div>
            </div>
        </div>

    </div>
</div>
  );
};

// Modal is about getting to know thyself

