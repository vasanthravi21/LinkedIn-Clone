import { Feed } from '@mui/icons-material';
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;
