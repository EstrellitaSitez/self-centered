import React from 'react';
import { isMobile } from 'react-device-detect';
import './Landing.css';
import { Carousel } from 'antd';
import tarot from './Assets/LandingPageImages/tarot.png'
import knowThyself from './Assets/LandingPageImages/knowthyself.png'
import meditation from './Assets/LandingPageImages/meditation.png'

// OPPORTUNITY TO WIN A FREE READING EVERY FRIDAY
export default function Landing() {

  const imageStyle={
      width:(isMobile? '90%':'70%'),
      height:(isMobile? '60%':'80%'),
      display:'inline-block',
      boxShadow: '10px 5px 5px rgb(135, 140, 142) ',
      marginBottom: '3%'
  }

  const parentDivStyle ={
    // maxHeight:'50vh'

  }

  const divStyle={
    height: '100%',
    width: '100%',
    display:(isMobile? 'block' : 'flex')
    // display:'block',
 

  }

  const divStyle2 = {
    marginLeft: '5%',
    color:'#414445',
    display:(isMobile? 'block' : 'table'),
    // flexDirection: 'column'
     verticalAlign:'middle'

  }

  const divStyle3={
    display:'table-cell',
    verticalAlign:'middle'
  }

  const pStyle ={
    paddingTop: '1%',
   
  }

  // const showImage = (imgSrc, alt) => {
  //     let image =  <img src={imgSrc} style={imageStyle} alt={alt}/>
  //     image.onload = function() {

  //     }
  // }
  // I want to show loading icon while image loads 


    return(
        // <div style={{height:'80vh'}}>
        <Carousel autoplay style={{padding:'3em', textAlign:'center', backgroundColor:'black', borderRadius:'2%'}} swipe={true} arrows={!isMobile? true : false} adaptiveHeight={true}>


        <div style={parentDivStyle}>
        <div id='action'>  
          <div style={divStyle}>
          <img src={tarot} style={imageStyle} alt='tarot cards'/>
          <div style={divStyle2}>
            <div style={divStyle3}>
            <p style={pStyle}>
              Work on enhancing your intuition and building your self confidence by studying Tarot! Yes, Tarot. Think of this module as a house of mirrors -- all reflecting different sectors of your complex mind.
            </p>
            <a href='/view-cards' > View Cards ➩</a>
            </div>
          </div>
        </div>
          </div>
        </div>


        <div style={parentDivStyle}>
        <div id='action'>  
          <div style={divStyle}>
          <img src={knowThyself} style={imageStyle} alt='pink bird staring into water' />
          <div style={divStyle2}>
            <div style={divStyle3}>
            <p style={pStyle}>
              All human behavior is guided by human emotions. You can either pretend you don't have any emotions and <i>fake</i> like you have control over the steering wheel, <b><i>or</i></b>  you can take control and explore the role <i>your</i> emotions play in your perception of reality. This module consists of prompts that will help you explore how your emotions guide your behavior. Let's go beneath the surface.
            </p>
            <a href='/know-thyself' > Know Thyself ➩</a>
            </div>
          </div>
        </div>
          </div>
        </div>


        <div style={parentDivStyle}>
        <div id='action'>    
          <div style={divStyle}>
          <img src={meditation} style={imageStyle} alt='hand pretending to grab sun' />
          <div style={divStyle2}>
            <div style={divStyle3}>
            <p style={pStyle}>
              It's very easy to get swept up by our mind and all its passing thoughts. Take a moment to ground yourself in the only moment that truly exists: the present.
            </p>
            <a href='/meditation' > Meditations ➩</a>
            </div>
          </div>
        </div>
          </div>
        </div>

      </Carousel>
      //  </div>
    )
}


