import React, { Component } from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Nav from './components/Nav/Nav'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Nav />
        <Home />
        <About />
      </div>
    )
  }
}

export default App
