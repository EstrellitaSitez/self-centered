import React from 'react'
import ReadingForm from './ReadingForm'

export default function RequestReading() {
    return(
        <div>
             <div style={{backgroundColor:'burlywood', padding:'2%', textAlign:'center'}}>
                <p>
                    Please fill out the form below. By default, it will be a general reading. The messages will be what you need to hear at the moment. If you have any specific questions / concerns or a topic you would like to cover, please write it below.
                </p>

                <p> 
                    Please don't go into detail about your situation. Reading with preconceived ideas makes my brain prone to farting. 
                </p>
            </div>
            <ReadingForm />
        </div>
    )
}