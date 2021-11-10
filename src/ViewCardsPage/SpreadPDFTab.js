import React, { useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import SpreadPDF from './SpreadPDF'
import { isMobile } from 'react-device-detect'

export default function SpreadPDFTab(props) {

    //  since its a new tab, the state refreshes
    const [pdfContents, setPDFContents] = useState(null)

    useEffect(()=>{
        if (props.spread){
            setPDFContents(props.spread)
            console.log("CONTENTSSS", pdfContents)
        }
    },[pdfContents])

    return(
        <div>
            
            {
                ((pdfContents != null) && (pdfContents.length > 0))? 
                <PDFViewer
                style ={{height:'100vh', width:'100vw'}}
                width='90%'
                height='90%'
                showToolbar

                    >
                    <SpreadPDF contents={pdfContents}/>
                </PDFViewer> 
                :
                <div style ={{textAlign:'center', color:'black'}}>
                    Ooops! Looks like there's no preview to show.
                </div>
            }
                    
        </div>

    )
}

        // {
        // (props.spread.length)?
        //        <PDFViewer
        //         style ={{height:'100vh', width:'100vw'}}
        //         width='90%'
        //         height='90%'
        //         showToolbar

        //    >
        //             <SpreadPDF/>
        //         </PDFViewer> 
        //         :
        //         <div style={{marginTop:'4%', textAlign:'center'}}>
        //             There is no preview to show
        //         </div>
        // }