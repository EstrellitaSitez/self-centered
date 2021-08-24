import React, { useCallback, useState } from 'react';
import CardContainer from './CardContainer';
import ViewSpecific from './ViewSpecific';
import CardViewModal from './CardViewModal';
import './Note.css'



export default function BuildTarotIntuitionPage() {

    const [selectedImage, selectTheImage] = useState({})
   
    // we want card container to shuffle once the image is UNSELECTED, nottt when the image is selected 

    // cardsHolder labels
    const minorArcanas = [ 'cups', 'swords', 'wands', 'pentacles']


    //this variable will receive an image obj passed up from card container
    const unselectImage = () => {
        selectTheImage({})
   
    }

    


    return(
        <div style={{
            textAlign:'center',
     
            
            }}>

        <div style={{
            textAlign:'center',
            backgroundColor:'burlywood',
            padding: '2em'
            }}>
                <p>
                With the following exercise we will be learning to trust ourselves more by building our <i>intuition</i> as well as our self-confidence. You know that quote by Alexander Hamilton -- "If you don't stand for something, you'll fall for everything"? It turns out he's right -- at least when it comes to stregnthening our sense self. The tarot cards below will function as a mirror, but a little less direct. In the tarot cards we will see situations that live in our minds rent free, yet charge us an unexpeted amount of emotional labor. In combination with the Know Thyself and Meditation modules, we will learn how the way we perceive these situations are guiding our physical and emotional responses. 
                </p>
            <p>
                Click on the cards that grab your attention. What vibes do you get from the scene shown on the card? How would I feel if I were the figure/ symbol in this card? Would I feel happy? Safe? Expansive? Restricted? What do the colors in this card tell me about the overall mood? Where are your eyes drawn to? What do these items represent to you? <b><i>Write down your observations.</i></b>  
                Together, the cards you've selected will tell a story? What is yours?
            </p>

            <p id='note' > <a style={{color:'black', fontWeight:'bold'}} href='https://c.tenor.com/tAkRmpf8yTAAAAAC/whats-was-the-reason.gif'> 
            Remember that whatever comes to mind when you look at these cards, comes to mind for a reason. 
            </a></p> 

            <p style={{color:'black', fontStyle:'oblique'}}>This is all about <b>your</b> interpretation. Do <b>not</b> talk yourself out of <b>your</b> observations. There's no right or wrong. <b>Just what you feel.</b></p>

{/* card container will get passed one prop: the name of the container. Using that name, cardContainer will fetch the cards its gotta fetch */}
        </div> 

        <div>
        <h4 style={{fontFamily:'Khand', color:'cadetblue', paddingTop:'2em'}}>Major Arcana</h4>
        <p style = {{color:'grey'}}>Think of the Major Arcana cards as character cards. The symbols that attracts your attention describe the character(s) in your story. How does this character feel? What is it doing? How does it see the world? </p>
            <CardContainer selectImage={  useCallback(
        (img)=>{
            selectTheImage(img)
        }, []
    )} name='trumps' key={1} />
        </div>    

        <div>
            <h4 style={{fontFamily:'Khand', color:'cadetblue'}}>Minor Arcana</h4> 
            <p style = {{color:'grey'}}>Think of the Minor Arcana cards as depicting the <i>circumstances</i> surrounding the character(s) in your story. What situation was this character placed in? What is the mood of the scene? Picture yourself in the scene. How do you feel?</p>
            {
                minorArcanas.map((name, i)=> {
                    return <CardContainer  selectImage={  useCallback(
                        (img)=>{
                            selectTheImage(img)
                        }, []
                    )} name={name} key={i}/>
                })
            }
        </div>
        <ViewSpecific/>

        {
            (selectedImage.source)? <CardViewModal unselectImage={
            unselectImage } image={selectedImage}/> : ''
        }
            
         </div>
    )

}


// note: it might be hard to sit there and think what the horns in a photo may represent in their life -- altho this issss technically sum shit for ppl just dipping their feet in so maybe its not that big of a deal