import React, { useState }  from 'react'
import {Card, Tooltip} from 'antd'
import { PlaySquareOutlined, SoundOutlined, StopOutlined} from '@ant-design/icons'
import Meta from 'antd/lib/card/Meta'

import VisualizationModal from './VisualizationModal'

import orbitingEarth from '../Assets/MeditationVideos/aroundTheWorld.mp4'
import gardenRain from '../Assets/MeditationVideos/gardenRain.mp4'
import rainyWindow from '../Assets/MeditationVideos/rainyWindow.mp4'

import brownPinkWhiteNoise from '../Assets/MeditationSounds/brownPinkWhiteNoise.wav'
import CoffeeHouseNoisesRain from '../Assets/MeditationSounds/CoffeeHouseNoisesRain.wav'
import peopleAround from '../Assets/MeditationSounds/peopleAround.wav'
import RainSounds from '../Assets/MeditationSounds/RainSounds.wav'
import treeHeatWaveBird from '../Assets/MeditationSounds/treeHeatWaveBird.wav'
import Waves from '../Assets/MeditationSounds/Waves.wav'


import './VisualizationMeditation.css'
import AudioSourcePopOver from './SourcePopOver'
import SourcePopOver from './SourcePopOver'

export default function VisualizationMeditation(){

    const [currentUrl, selectURL] = useState(null)
    const [soundSelected, selectSound] = useState(null)

    // Add white noise to all the videos

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
        }
    ]

    const sounds = [
        {
            audio: brownPinkWhiteNoise
        },
        {
            audio: CoffeeHouseNoisesRain
        },
        {
            audio: peopleAround
        },
        {
            audio: RainSounds
        }, 
        {
            audio: treeHeatWaveBird
        },
        {
            audio: Waves
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

    const videoPopOver = <div> Videos provided by <a href='https://mixkit.co/free-video-backgrounds/'> MixKit </a> under a <a href='https://mixkit.co/license/#videoFree'></a>Stock Video Free License</div>

    const audioPopOver =  <div>Background audio track provided by <a href='https://noises.online' title='Noises.Online' target='_blank'>Noises.Online</a> under a <a href='http://creativecommons.org/licenses/by/3.0/' title='Creative Commons BY 3.0' target='_blank'>CC 3.0 BY</a> license.</div>



    return (
        <div>
            {
                (soundSelected)?
                <audio autoPlay loop>
                <source src={soundSelected.audio} type='audio/wav'></source>
             </audio>
                :
                null
            }
            <div style={{
                textAlign:'center',
                marginLeft:'25%',
                marginRight:'25%'
            }}>
                <div>
                Pick a landscape below. As you immerse yourself in the video/sound, think about how you would feel in this landscape. Stretch your imagination. Where are you? What are you doing there? Which senses are the most active? What emotions are brought up? How do you feel?
                </div>
                <br/>
                <Tooltip
                    color='pink'
                    autoAdjustOverflow
                    title={<div>You can overlay a sound with a video</div>}
                    overlayInnerStyle={{color:'whitesmoke'}}
      >

                         <p style={{
                            color:'black',
                            display: 'inline',
                            cursor: 'pointer',
                            fontStyle: 'oblique'}} 
                            type="text"><b> Tip </b> </p>
                </Tooltip>
            </div>

            <div style={{margin:'6%'}}>
                <table >
                    <tr>
                    <td colSpan= '7' style={{ backgroundColor:'Gold'}}>
                    <h6 style={{padding:'1%'}}> Sounds: </h6>
                    </td>
                    </tr>
                
                    <tr>
                        
                        {
                            sounds.map( (sound) =>{
                                return(
                                    <td> 
                                        <SoundOutlined onClick={()=>selectSound(sound)} />
                                    </td>
                                )
                                })
                        }
                        <td>
                            <StopOutlined onClick={()=>selectSound(null)}/>
                        </td>
                    </tr>
                </table>
            </div>
            <div style={{textAlign:'center'}}>
                <h5>Videos:</h5>
            {makeCards(visualizations)}
            </div>
          
            {
                currentUrl?
                    <VisualizationModal unselectURL={unselectURL} url={currentUrl}/>
                    :
                    null
            }
            <p style={{fontSize:'small', bottom:0 }}>
                <p>Sources:</p>
                 <SourcePopOver title={audioPopOver} buttonText='Audio' />
                 <SourcePopOver title={videoPopOver} buttonText='Video' />
            </p>
        </div>
    )
}

// feel your consciousness at every part of your body. + after youve done that. Imagine that thing you want --> feel in your body how you're gonna feel when you've gotten it