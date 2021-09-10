import React from 'react';
import { useParams } from "react-router-dom";

import VisualizationMeditation from './Meditations/VisualizationMeditation';
import GroundingMeditation from './Meditations/GroundingMeditation';
import DettachmentMeditation from './Meditations/DettachmentMeditation';

export default function MeditationContainer(){
    
    let { meditationName } = useParams();
    console.log(meditationName)
    let name = meditationName.toUpperCase();

    switch (name) {
        case 'GROUNDING':
            return <GroundingMeditation/>
            break;
    
        case 'DETTACHMENT':
            return <DettachmentMeditation/>
            break;    

        case 'VISUALIZATION':
            return <VisualizationMeditation/>
            break;  

        default:
            window.location ='/meditation';
    }

}