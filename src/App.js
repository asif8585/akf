import React, { Component } from 'react';
import './App.css';
import { About } from './Components/Aboutpage';
import { Features } from './Components/Features2';
import { FirstPage } from './Components/FirstPage';
import Welcome from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Welcome/>
    <FirstPage/>
    <Features/>
    <About/>
      </div>
    );
  }
}

export default App;
