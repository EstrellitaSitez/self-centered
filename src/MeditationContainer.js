import React from 'react';
import { useParams } from "react-router-dom";

import ManifestationMeditation from './Meditations/ManifestationMeditation';
import PurposeMeditation from './Meditations/PurposeMeditation';
import DettachmentMeditation from './Meditations/DettachmentMeditation';

export default function MeditationContainer(){
    
    let { meditationName } = useParams();
    console.log(meditationName)
    let name = meditationName.toUpperCase();

    switch (name) {
        case 'PURPOSE':
            return <PurposeMeditation/>
            break;
    
        case 'DETTACHMENT':
            return <DettachmentMeditation/>
            break;    

        case 'MANIFESTATION':
            return <ManifestationMeditation/>
            break;  

        default:
            window.location ='/meditation';
    }

}