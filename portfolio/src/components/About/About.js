import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div id='about' className='about-me'>
        <h1 className='about-h1'>About Me</h1>
        <img className='headshot' src='/images/meron.png' alt='headshot' />
      </div>
    )
  }
}

export default About
