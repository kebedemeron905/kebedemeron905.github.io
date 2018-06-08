import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  render () {
    return (

      <div id='project' className='projects'>
        <h1>Projects</h1>

        <div className='projects-container'>
          <div className='project-one'>
            <h3>Bookshelf</h3>
            <p>A full-stack bookshelf app built using Express,
            Handlebars, and Mongoose.</p>
            <img src='/images/bookshelf.png' alt='bookshelf' />
          </div>

          <div className='project-two'>
            <h3>Seekr</h3>
            <p>A full-stack bookshelf app built using Express,
            Handlebars, and Mongoose.</p>
            <img src='/images/bookshelf.png' alt='bookshelf' />
          </div>

          <div className='project-three'>
            <h3>Salsa in the DMV</h3>
            <p>A full-stack bookshelf app built using Express,
            Handlebars, and Mongoose.</p>
            <img src='/images/bookshelf.png' alt='bookshelf' />
          </div>
        </div>
      </div>

    )
  }
}

export default Projects
