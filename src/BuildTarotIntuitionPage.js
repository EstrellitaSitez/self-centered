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
            backgroundColor:'rgb(83, 173, 173)',
            padding: '2em'
            }}>
                <p>
                 <i>"If you don't stand for something, you'll fall for everything"</i> --Alexander Hamilton </p>
                <p>
                 We must strengthen our sense self so that we can have a grasp on who we are, regardless of who this world tells us we should be. In the tarot cards below, we will see situations that live in our minds rent free, yet charge us an unexpeted amount of emotional labor. In combination with the Know Thyself and Meditation modules, we will learn how our perception of our circumstances guides our physical and emotional responses. 
                </p>
            <p>
                Click on the cards that grab your attention and take a look at the guiding questions.
            </p>

            <p id='note' style={{ backgroundColor:'rgb(83, 173, 173)'}}> <a style={{color:'black', fontWeight:'bold'}} href='https://c.tenor.com/tAkRmpf8yTAAAAAC/whats-was-the-reason.gif'> 
            Remember that whatever comes to mind when you look at these cards, comes to mind for a reason. 
            </a></p> 

            <p style={{color:'black', fontStyle:'oblique'}}>This is all about <b>your</b> interpretation. Do <b>not</b> talk yourself out of <b>your</b> observations. There's NO right or wrong. <b>Just what you feel.</b></p>

{/* card container will get passed one prop: the name of the container. Using that name, cardContainer will fetch the cards its gotta fetch */}
        </div> 

       
        <div>
        <h4 style={{fontFamily:'Khand', color:'cadetblue', paddingTop:'2em'}}>Major Arcana</h4>
        <p style = {{color:'grey'}}>Think of the Major Arcana cards as character cards. The symbols that attracts your attention describes the main character in your story. How does this character feel? What is it doing? How does it see the world? </p>
            <div style={{backgroundColor:'rgb(253, 246, 236)'}}>
            <CardContainer selectImage={  useCallback(
                 (img)=>{
                 selectTheImage(img)
                }, []
                )} name='trumps' key={1} />
            </div>
        </div>    

        <div>
            <h4 style={{fontFamily:'Khand', color:'cadetblue', paddingTop:'2em'}}>Minor Arcana</h4> 
            <p style = {{color:'grey'}}>Think of the Minor Arcana cards as depicting the <i>circumstances</i> surrounding the character in your story. What situation was this character placed in? What is the mood of the scene? Picture yourself in the scene. How do you feel?</p>
            <div style={{backgroundColor:'rgb(253, 246, 236)'}}>
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