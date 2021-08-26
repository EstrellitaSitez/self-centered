import React from 'react';
import { isMobile } from 'react-device-detect';
import './Landing.css';
import { Carousel } from 'antd';
import tarot from './Assets/LandingPageImages/viva-luna-studios-y3qrbAgm7q8-unsplash.jpg'
import knowThyself from './Assets/LandingPageImages/gaetano-cessati-bvpWQI8Xb0k-unsplash.jpg'
import meditation from './Assets/LandingPageImages/aamir-suhail-ATlRqTCbvV4-unsplash.jpg'


export default function Landing() {

  const imageStyle={
      width:(isMobile? '90%':'70%'),
      height:(isMobile? '60%':'80%'),
      display:'inline-block',
      boxShadow: '10px 5px 5px rgb(187, 211, 211',
      marginBottom: '3%'
  }

  const parentDivStyle ={
    height:'100%'
  }

  const divStyle={
    height: '100%',
    width: '100%',
    // display:'flex'
    display:'block'
  }

  const divStyle2 = {
    marginLeft: '5%',
    color:'#414445',
  }

  const pStyle ={
    paddingTop: '1%'
  }

    return(
        <div style={{textAlign:'center', height:'100%', backgroundColor:'black'}}>
        <Carousel autoplay style={{padding:'3em'}}>


        <div style={parentDivStyle}>
        <div id='action'>
          <a href='/view-cards' > View Cards</a>
          <div style={divStyle}>
          <img src={tarot} style={imageStyle} alt='tarot cards'/>
          <div style={divStyle2}>
            <p style={pStyle}>
              Work on enhancing your intuition and building your self confidence by studying Tarot! Yes, Tarot. Think of this module as a house of mirrors -- all reflecting different sectors of your complex mind.
            </p>
          </div>
        </div>
          </div>
        </div>


        <div>
        <div id='action'>
          <a href='/know-thyself' > Know Thyself</a>
          <div style={divStyle}>
          <img src={knowThyself} style={imageStyle} alt='pink bird staring into water' />
          <div style={divStyle2}>
            <p style={pStyle}>
              All human behavior is guided by human emotions. You can either pretend you don't have any emotions and continue to live in a protected fantasy, <b><i>or</i></b>  you can explore how <i>yours</i> influence you. This module consists of prompts that will help you explore how your emotions guide your behavior. Let's go beneath the surface.
            </p>
          </div>
        </div>
          </div>
        </div>


        <div>
        <div id='action'>
          <a href='/meditation' > Meditations</a>
          <div style={divStyle}>
          <img src={meditation} style={imageStyle} alt='hand pretending to grab sun' />
          <div style={divStyle2}>
            <p style={pStyle}>
              It's very easy to get swept up by our mind and all its passing thoughts. Take a moment to ground yourself in the only moment that truly exists: the present.
            </p>
          </div>
        </div>
          </div>
        </div>
      </Carousel>
      </div>
    )
}


