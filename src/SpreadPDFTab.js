import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import SpreadPDF from './SpreadPDF'

export default function SpreadPDFTab(props) {

    //  since its a new tab, the state refreshes
    console.log("IN SPREAD Tab:", props.spread)

    return(
        <div>

        {
        (props.spread.length)?
               <PDFViewer
                style ={{height:'100vh', width:'100vw'}}
                width='90%'
                height='90%'
                showToolbar

           >
                    <SpreadPDF/>
                </PDFViewer> 
                :
                <div style={{marginTop:'4%', textAlign:'center'}}>
                    There is no preview to show
                </div>
        }
                    
        </div>

    )
}