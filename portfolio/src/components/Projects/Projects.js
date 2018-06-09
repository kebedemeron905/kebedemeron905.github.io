import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  render () {
    return (
      <div id='projects' className='projects-container'>
        <h1>Projects</h1>
        <div className='scrolling-wrapper'>
          <div className='project-show'>
            <h1 className='project-name'>Bookshelf</h1>
            <p className='project-description'><span className='app'>App:</span> A full-stack bookshelf app built using <br />Express, handlebars, and Mongoose.</p>
            <div className='icon-container'>
              <h4 className='tools-used'>Tools Used: <span>MongDB, Express, Node</span></h4>
              <i className='devicon-mongodb-plain' />
              <i className='devicon-express-original' />
              <i className='devicon-nodejs-plain' />
            </div>
            <div className='project-link-container'>
              <a className='project-link'>View Code</a>
              <a className='project-link'>Deployed App</a>
            </div>
            <img className='project-img'src='/images/bookshelf.png' alt='bookshelf' />
          </div>
        </div>

      </div>

    )
  }
}

export default Projects
