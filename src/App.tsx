import React from 'react';
import Header from './components/header';
import './App.css';
import SideBar from './components/sideBar';
import SunPosition from './components/shade/sunPosition'

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='sunposition'>
        <SunPosition />
      </div>
    </div>
  );
}

export default App;
