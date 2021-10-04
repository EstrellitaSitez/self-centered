import React from 'react';
import { useParams } from "react-router-dom";

import VisualizationMeditation from './Meditations/VisualizationMeditation';
import GroundingMeditation from './Meditations/GroundingMeditation';
import DettachmentMeditation from './Meditations/DettachmentMeditation';
import MeditationNav from './Meditations/MeditationNav';

export default function MeditationContainer(){
    
    let { meditationName } = useParams();
    console.log(meditationName)
    let name = meditationName.toUpperCase();

    switch (name) {
        case 'GROUNDING':
            return <div> <MeditationNav/><GroundingMeditation/></div>
            break;
    
        case 'DETTACHMENT':
            return <div> <MeditationNav/><DettachmentMeditation/></div>
            break;    

        case 'VISUALIZATION':
            return <div> <MeditationNav/><VisualizationMeditation/></div>
            break;  

        default:
            window.location ='/meditation';
    }

}