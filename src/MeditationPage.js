import React from 'react';
import {Link, useRouteMatch} from "react-router-dom";

import {Card} from 'antd';

import manifestation from './Assets/MeditationThumbnails/manifestation.png';
import grounding from './Assets/MeditationThumbnails/grounding.png';
import dettachment from './Assets/MeditationThumbnails/dettachment.png';
import { isMobile } from 'react-device-detect';

const { Meta } = Card;

export default function MeditationPage(){


    const meditations = [
        // ace of wands
        // what are you feeling now? 
        // what is the feeling you are after?
        // what are some SMALL steps you can take to bring you closer to your goal?
        // let go of what is not in your control
         {  name: 'Manifestation',
            image: manifestation,
            imageName:'manifestation',
        },
        // strength card
        // emotional dettachment -- learn to distance yourself from your emotions so you can observe them better
        // what are your overal feelings?
        // body scan --> where is this feeling stored?
        // what memories/ scenarios/ etc surface?
        {
            name: 'Dettachment',
            image: dettachment,
            imageName:'dettachment',
        },
        // judgement card
        // being purposeful with our actions: what do you hope to gain out of this meditation?
        // silent mm meditation
        {
            name: 'Grounding',
            image: grounding,
            imageName:'grounding',
        }

    ]

    let { url } = useRouteMatch();

    return(
        <div style={{height: '100%' ,textAlign:'center', color:'black'}}>
           <div style={{fontFamily:'Khand', fontSize:'large' ,backgroundColor:'#FCB635', padding:'1%'}}>
                Choose a meditation
           </div>
           <div id= 'meditations' style={{height: '100%', width:'100%', paddingTop:'3%' }}>
                {
                    meditations.map((meditation)=> {
                        return (
                            <Link to={`${url}/${meditation.name}`} style={{padding:'5%'}}>
                            <Card
                            hoverable
                            size='small'
                            style={{ width: isMobile? '38%': '15%', marginLeft:0, marginRight:0, display: 'inline-block'}}
                            cover={<img style={{ }} alt={meditation.imageName} src={meditation.image} />}
                            >
                            <Meta title={meditation.name}  />
                          </Card>
                          </Link>
                        )
                    })
                }
           </div>
        </div>
    )
}
