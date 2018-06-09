import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
  render () {
    return (

      <div id='project' className='projects'>
        <h1 className='projects-h1'>Projects</h1>

        <div className='projects-container'>
          <div className='project-one'>
            <h3>Bookshelf</h3>
            <div className='description-container'>
              <p>A full-stack bookshelf app built using Express,
              Handlebars, and Mongoose.</p>
            </div>
            <a href='https://bookshelv.herokuapp.com/books' target='_blank'>
              <img src='/images/bookshelf.png' alt='bookshelf' />
            </a>
            <div className='project-links'>
              <a href='https://github.com/kebedemeron905/Project-two' target='_blank'><button>View Code</button></a>
              <a href='https://bookshelv.herokuapp.com/books' target='_blank'><button>Deployed App</button></a>
            </div>
          </div>

          <div className='project-two'>
            <h3>Seekr</h3>
            <p>A frontend React app that uses a Django REST framework API in the backend.<br />
              Allows users to track their job application process. </p>
            <img src='/images/bookshelf.png' alt='bookshelf' />
            <div className='project-links'>
              <a href='https://github.com/kebedemeron905/Project-two' target='_blank'><button>View Code</button></a>
              <a href='https://bookshelv.herokuapp.com/books' target='_blank'><button>Deployed App</button></a>
            </div>
          </div>

          <div className='project-three'>
            <h3>Flash Cards</h3>
            <p>A simple JavaScript flash card game that asks
              users to identify titles of <br />iconic artworks.
            </p>
            <img src='/images/bookshelf.png' alt='bookshelf' />
            <div className='project-links'>
              <a href='https://github.com/kebedemeron905/Project-two' target='_blank'><button>View Code</button></a>
              <a href='https://bookshelv.herokuapp.com/books' target='_blank'><button>Deployed App</button></a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Projects
