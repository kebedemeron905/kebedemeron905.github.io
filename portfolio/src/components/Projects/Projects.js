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
            <a href='' class=''>View Code</a>
            <a href='' class=''>Deployed App</a>
            <img src='/images/bookshelf.png' alt='bookshelf' />

          </div>

          <div className='project-two'>
            <h3>Seekr</h3>
            <p>A frontend React app that uses a Django REST framework API in the backend.<br />
              Allows users to track their job application process. </p>
            <img src='/images/bookshelf.png' alt='bookshelf' />

          </div>

          <div className='project-three'>
            <h3>Salsa in the DMV</h3>
            <p>A full-stack Django app that allows users to track<br />
               salsa events in the DMV.
            </p>
            <img src='/images/bookshelf.png' alt='bookshelf' />
          </div>

          <div className='project-four'>
            <h3>Flash Cards</h3>
            <p>A simple JavaScript flash card game that asks<br />
              users to identify titles of iconic artworks.
            </p>
            <img src='/images/bookshelf.png' alt='bookshelf' />
          </div>

        </div>
      </div>

    )
  }
}

export default Projects
