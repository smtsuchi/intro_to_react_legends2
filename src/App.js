import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home';
import News from './views/News';
import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      'user':null
    }
  }
  setUser = () => {
    if (this.state.user) {
      this.setState({'user': null}) 
    } else {
      this.setState({'user': "Shoha"})
    }
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} setMyUser={this.setUser} />
        
        <Routes>
          <Route path='/' element={<Home  /> } />
          <Route path='/about' element={<About />}  />
          <Route path='/news' element={<News />} />
        </Routes>

      </div>
    )
  }
}

export default  App