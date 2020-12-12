import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Game from './components/Game'
import GameBox from './components/GameBox'



function App() {  

  return (
    <div>
      <GameBox />
    </div>
  );
}

export default App;
