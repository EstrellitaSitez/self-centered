import React from 'react';
import { useParams } from "react-router-dom";

import VisualizationMeditation from './VisualizationMeditation';
import GroundingMeditation from './GroundingMeditation';
import DettachmentMeditation from './DettachmentMeditation';
import MeditationNav from './MeditationNav';

export default function MeditationContainer(){
    
    let { meditationName } = useParams();
    let name = meditationName.toUpperCase();

    switch (name) {
        case 'GROUNDING':
            return <div> <MeditationNav/><GroundingMeditation/></div>
           
    
        case 'DETTACHMENT':
            return <div> <MeditationNav/><DettachmentMeditation/></div>
           

        case 'VISUALIZATION':
            return <div> <MeditationNav/><VisualizationMeditation/></div>
            

        default:
            window.location = process.env.PUBLIC_URL+'/meditation';
    }

}