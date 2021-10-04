import React, { useState }  from 'react'
import {Card} from 'antd'
import { PlaySquareOutlined} from '@ant-design/icons'
import Meta from 'antd/lib/card/Meta'

import VisualizationModal from './VisualizationModal'
import orbitingEarth from '../Assets/MeditationVideos/aroundTheWorld.mp4'
import gardenRain from '../Assets/MeditationVideos/gardenRain.mp4'
import rainyWindow from '../Assets/MeditationVideos/rainyWindow.mp4'
import waterRipples from  '../Assets/MeditationVideos/waterRipples.mp4'

export default function VisualizationMeditation(){

    const [currentUrl, selectURL] = useState(null)

    const visualizations = [
        {   title:'Orbiting Earth',
            video : orbitingEarth,
        },
        {
            title:'Garden Rain',
            video: gardenRain,
        },
        {
            title: 'Rainy Window',
            video: rainyWindow
        },
        {
            title:'Water Ripples',
            video: waterRipples
        }
    ]

    const cardContainerStyle ={
        margin:'6%',
    }

    const handleClick = (url) => {
        selectURL(url)
    }

    const unselectURL = () => {
        selectURL(null)
    }

    const makeCards = (array) => {
       return array.map(
            (meditation,i)=>{
                return (
                   <div style={cardContainerStyle} key={i}>
                        <Card
                        actions={
                            [
                                <PlaySquareOutlined key='video' onClick={()=>{
                                    handleClick( meditation.video)
                                }}/>
                            ]
                        }
                        bodyStyle = {
                            {
                                backgroundColor:'teal',
                                textAlign:'center',
                                // fontFamily: 'Rajdhani',
                            }
                        }
                    >
                    
                    <Meta
                        title={meditation.title}
       
                    />

                    </Card>
                   </div>
                )
            }
        )
    }

    return (
        <div>
            <div style={{
                textAlign:'center',
                marginLeft:'25%',
                marginRight:'25%'
            }}>
                Pick a landscape below. As you watch the video, think about how you would feel in this landscape. Stretch your imagination. What are you doing there? Which senses are the most active? What emotions are brought up? How do you feel?
            </div>
            {makeCards(visualizations)}
            {
                currentUrl?
                    <VisualizationModal unselectURL={unselectURL} url={currentUrl}/>
                    :
                    null
            }
        </div>
    )
}

// feel your consciousness at every part of your body. + after youve done that. Imagine that thing you want --> feel in your body how you're gonna feel when you've gotten it