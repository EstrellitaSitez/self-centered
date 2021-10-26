import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

import {Card, Divider} from 'antd';

import visualization from '../Assets/MeditationThumbnails/visualization.png';
import grounding from '../Assets/MeditationThumbnails/grounding.png';
import dettachment from '../Assets/MeditationThumbnails/dettachment.png';
import { isMobile } from 'react-device-detect';

const { Meta } = Card;

export default function MeditationPage(){


    const meditations = [
        // choice of video or sound clip
         {  name: 'Visualization',
            image: visualization,
            imageName:'visualization',
            desc: `Sharpen your mind's eye by immersing yourself in a different reality. Then, use those same techniques to make the most out of this one.`
        },
        // game
        {
            name: 'Dettachment',
            image: dettachment,
            imageName:'dettachment',
            desc:`Vew your thoughts from a higher perspective to deepen your awareness of your mental patterns. ` 
        },
        // first take deep breaths. once youve taken deep breaths you hit start
        //spilling cup, imagining it filling you up like youre an empty weird shaped cup. It starts with your toes all the way up to your head. liquifying and dissolving the tension in these body parts 
        // hit done
        // taken to animation where its just radiating, and thatll be you settling into your surroundings
        {
            name: 'Grounding',
            image: grounding,
            imageName:'grounding',
            desc: `Feeling antsy? Brain too cloudy? Take a moment to center yourself with this meditation.`
        }

    ]

    let { url } = useRouteMatch();

    return(
        <div style={{height: '100%' ,textAlign:'center', color:'black'}}>
           <div style={{fontFamily:'Khand',backgroundColor:'white', fontSize:'large', padding:'1%'}}>
                <p>
                Meditation is about observing the <i>relationship</i> that we have with our thoughts and bodily senses, and consequently redefining the way that we interact with the reality around us.</p>
                <p><b>Remember that thinking is part of the human experience. The problem arises when we see ourselves <i>as</i> these thoughts.
                </b> </p>
           </div>
            <Divider/>
            
                <div id= 'meditations' style={{height: '100%', width:'100%', padding:'3%', margin:'auto', backgroundColor: (isMobile? 'white': 'blanchedalmond')}}>
                {
                    meditations.map((meditation, i)=> {
                        return (
                            <Link key={i} to={`${url}/${meditation.name}`} style={{ padding:'1%', verticalAlign:'middle'}}>
                            <Card
                            hoverable
                            // loading
                            bordered
                            style={{ padding:'1%',width: isMobile? '100%': '25%', display:'inline-block', marginBottom:'1em', borderRadius:'1em'}}
                            cover={<img style={{ borderRadius:'1em'}} alt={meditation.imageName} src={meditation.image} />}
                            >
                            <Meta  title={meditation.name} description={meditation.desc} />
                          </Card>
                          </Link>
                        )
                    })
                }
                 </div>

         
        </div>
    )
}
