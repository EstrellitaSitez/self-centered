import React from 'react';
import './Landing.css';
import { Carousel } from 'antd';


export default function Landing() {
    return(
        <div style={{textAlign:'center', height:'550px', backgroundColor:'black', paddingTop:'4em'}}>
        <Carousel autoplay style={{padding:'3em'}}>
        <div>
        <div id='action'><a href='/view-cards' > View Cards</a></div>
        </div>
        <div>
        <div id='action'><a href='/know-thyself' > Know Thyself </a></div>
        </div>
        <div>
        <div id='action'><a href='/meditation'>  Meditation </a></div>
        </div>
      </Carousel>
      </div>
    )
}


