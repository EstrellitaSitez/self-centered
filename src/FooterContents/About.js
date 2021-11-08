import React from 'react'
import './FooterLink.css'
import { Link } from 'react-router-dom'
  

const About = () => (
    <div className='footerLink'>
        <h1 className='title'>
           About
        </h1>
        <div>
              <Link   to='/'><b> Self-Centered </b></Link> is a tool for self-exploration.  We constantly <i>react</i> to our circumstances instead of sitting with our emotions and trying to understand them. Life doesn't happen <i>to</i> us. It happens within us and around us-- and sometimes we forget this. This site is meant to help us pause and reevaluate our perspective. 

            <p>Think of all the ideas you have about yourself and about your role in the world. Where do they come from? How do they affect your daily actions? Your daily thoughts? How do they shape your experiences? How do they shape <i>you</i>? </p>

            <p>Our perspective dictates our reality. Learn more about what shapes your own perspective to get a clearer picture of your reality.</p>

        </div>
    </div>
)
export default About