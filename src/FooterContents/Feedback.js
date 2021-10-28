import React, { useEffect, useState } from 'react';
import { Input, Form } from 'antd';
import { Button } from 'antd/lib/radio';
import emailjs from 'emailjs-com'
import{ init } from 'emailjs-com'


import ThankYouPage from './ThankYouPage';

export default function Feedback() {

    const [disabled, setDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [messageSent, deliveredMessage]  = useState(false)
    const [showError, setShowError] = useState(false)
  
    const formStyle = {
        display:'flex',
        flexDirection:'column',
        width:'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    const inputStyle={
        width:'100%'
    }

    useEffect(()=>{
        const userId = process.env.REACT_APP_EMAILJS_USER_ID
        init(userId)
    })

    const onFinish = (e) => {
        e.preventDefault()
        let templateParams = {
            message: message.feedback,
            }
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_KEY, process.env.REACT_APP_EMAILJS_TEMPLATE_KEY, templateParams)
        .then(function(response) {
            let status = response.status
            if (status === 200) {
                deliveredMessage(true)
            }
            else{
                setShowError(true)
            }
         }, function(err) {
            console.log('FAILED...', err);
         });
      }

    //   when you type and delete, no characters are left but the button does nnot disable 
    const handleChange = (change) => {
        setMessage(change)
        if(change.feedback != '') {
            setDisabled(false)
        }
        else{
            setDisabled(true)
        }
    }

    return(
        <div style={{width:'100%', textAlign:'center'}}>
             {
                        showError? 
                            <div style={{color:'red'}}>
                                Ooops! There was an error, try again.
                            </div>
                            :
                            null
            }
           {
               messageSent? 
                <ThankYouPage/>
                :
                <Form    
                initialValues={{
                remember: true
                }}
                style={formStyle} 
                onValuesChange={handleChange} 
                >

                    <Form.Item name="feedback" >
                        <Input.TextArea style={inputStyle} placeholder='Write your feedback here.' rows={10}  />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={onFinish} disabled={disabled} type="primary" style={inputStyle} htmlType="submit">Submit</Button>
                    </Form.Item>
                    </Form>
              
           }
        </div>
    )
}
// antd form onFinish not working-- tired of dealing with it so onClick it is