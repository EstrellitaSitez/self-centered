import React, { useCallback, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { PDFDownloadLink} from '@react-pdf/renderer';
import { Spin, Button } from 'antd';
import CardContainer from './CardContainer';
import ViewSpecific from './ViewSpecific';
import CardViewModal from './CardViewModal';
import TarotQuestionPopOver from './TarotQuestionPopOver';
import '../Note.css'
import { isMobile } from 'react-device-detect';
import SpreadPDF from './SpreadPDF';





export default function BuildTarotIntuitionPage(props) {

    const [selectedImage, selectTheImage] = useState({})
    // Take in tarotCard object which has the image, and notes
    const [spread, addToSpread] = useState([])

    // cardsHolder labels
    const minorArcanas = [ 'cups', 'swords', 'wands', 'pentacles']


    //this variable will receive an image obj passed up from card container
    const unselectImage = () => {
        selectTheImage({})
    }

    const add = (imageName, imageSRC, notes) => {
        let tarotObj = {
            imageName: imageName,
            imageSrc: imageSRC,
            notesHTML: notes
        }

        addToSpread([...spread, tarotObj])

    }
    const history = useHistory()
    // open in tab
    const openPDFPreview = () => {
        props.setCardsSpread(spread)
        history.push(('/view-cards/spread-preview')) 
    }

    const downloadButtonsStyle = {
        backgroundColor:'white', 
        color:'teal', 
        height:'100%', 
        width: '8%', 
        fontSize:'100%', 
        padding:'2%', 
        cursor:'pointer', 
        boxShadow:'8px 5px 5px grey'
    }

    const downloadLinkStyle = {
        width:'max-content'
    }

    const linkStyle = {
        color: 'white',
        textDecoration: isMobile? 'underline' : 'none'
    }

    return(
        <div style={{
            textAlign:'center',
     
            
            }}>
            
           <div style={{
           textAlign:'center',
           backgroundColor:'rgb(83, 173, 173)',
           padding: '2em',
           marginLeft: '3vh',
           marginRight: '3vh',
           display: 'flex',
           flexDirection: 'row',
           alignItems: 'center',
           justifyContent: 'center'
           }}>
               <div>
               <p 
               style={{
                   marginLeft:'3em',
                   marginRight:'3em'
               }}
               >
               We will be using the cards below as a sort of Rorschach test. 
               <br/>
               </p>
               
               <b><TarotQuestionPopOver/></b>

               <p style={{paddingBottom:'1%'}}> 
               <b>Click</b> on a card that grabs your attention to flip it over. <b>Click</b> on it again to record your observations. The box to the right represents how many cards you've recorded observations for. <b>Click the box to download your observations into a PDF.</b>
               <br/>
               </p>
              
              <p>
              <i style={{color:'black'}}> Remember that whatever comes to mind when you look at these cards, comes to mind for a reason.</i>   This is all about <i>your</i> interpretation. Do <i>not</i> talk yourself out of <i>your</i> observations.
                   <b>
                       If you refresh the page, your observations will be erased.
                   </b>
               </p>

               <p>
                ***
                     Refer to the   <Link  style={linkStyle} to='/needs-inventory' target='_blank'> Needs Inventory⬈ </Link> 
                    and the   <Link  style={linkStyle} to='/feelings-inventory' target='_blank'> Feelings Inventory⬈</Link> to name and understand your emotions.
                ***   
               </p>
               </div>

               

               {
                   isMobile? 
                   <PDFDownloadLink style={{...downloadButtonsStyle, ...downloadLinkStyle}} document={<SpreadPDF contents={spread} />} fileName="Self-Centered-Tarot-ShadowWork.pdf">
                   {({ blob, url, loading, error }) =>
                    loading ? <Spin/> : <Button style={{backgroundColor:'transparent', border:'none', width:'100%', color:'inherit'}} type='ghost'> {spread.length} </Button>
                   }
                   </PDFDownloadLink>
                    :
                    <div 
                    onClick = {()=> openPDFPreview()}
                    style={downloadButtonsStyle}
                    >
                       <b> {spread.length} </b>
                    </div>
               }
               
      
           </div>  

        

      
     
      
       <div>
       <h4 style={{fontFamily:'Khand', color:'cadetblue', paddingTop:'2em'}}>Major Arcana</h4>
       <p style = {{color:'grey'}}>Think of the Major Arcana cards as character cards. The symbols that attracts your attention describes the main character in your story. How does this character feel? What is it doing? How does it see the world? </p>
           <div style={{backgroundColor:'rgb(253, 246, 236)'}}>
           <CardContainer 
               selectImage={  useCallback(
                   (img)=>{
                       
                       selectTheImage(img)
                    }, []
                )} 
                name='trumps' 
                key={1} 
                />
           </div>
       </div>    

       <div>
           <h4 style={{fontFamily:'Khand', color:'cadetblue', paddingTop:'2em'}}>Minor Arcana</h4> 
           <p style = {{color:'grey'}}>Think of the Minor Arcana cards as depicting the <i>circumstances</i> surrounding the character in your story. What situation was this character placed in? What is the mood of the scene? Picture yourself in the scene. How do you feel?</p>
           <div style={{backgroundColor:'rgb(253, 246, 236)'}}>
           {
               minorArcanas.map((name, i)=> {
                   return <CardContainer  
                               selectImage={  useCallback(
                                   (img)=>{
                                   selectTheImage(img)
                                   }, []
                                )} 
                               name={name} 
                               key={i}
                               />
               })
           }
           </div>
       </div>
       <ViewSpecific/>

       {
           (selectedImage.source)? <CardViewModal addToSpread={add} unselectImage={
           unselectImage } image={selectedImage}/> : ''
       }
   
         </div>
         
    )

}


// note: it might be hard to sit there and think what the horns in a photo may represent in their life -- altho this issss technically sum shit for ppl just dipping their feet in so maybe its not that big of a deal