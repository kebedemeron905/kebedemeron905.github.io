import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      <div id='about' className='about-me'>
        <h1 className='about-h1'>About</h1>
        <img className='headshot' src='/images/meron.png' />
      </div>
    )
  }
}

export default About
