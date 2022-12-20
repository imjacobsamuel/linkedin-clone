import React from 'react';
import './App.css';
import Sidebar from './app/Sidebar';
import Header from './Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='app__body'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;

