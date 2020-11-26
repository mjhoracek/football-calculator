import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Game from './components/Game'

const APILINK = 'http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

function App() {  
const [games, setGames] = useState([
  {
    away: 'Oakland Raiders',
    home: 'Denver Broncos',
    predictedWinner: '####',
  },
  {
    away: 'New England Patriots',
    home: 'Kansas City Chiefs',
    predictedWinner: '####',
  }
])



useEffect(() => {
  const fetchItems = async () => {
    const result = await axios(APILINK)
    result.map(game => ({
      teams: game.data.events.name,
      userInput1: ''
    }));
    console.log(result);
   
/*     const data = result.data.events
    let newGames = [];
    for(let i = 0; i < data.length; i++){
      newGames.push(data[i].name);
    }
    let schedule = [{}];
    for(let i = 0; i < newGames.length; i++){
      schedule.push({theGames: i})
    }
    console.log(newGames) */
    
  }
  fetchItems();
})


const handleChange = (index, value) => {
  const newGames = [...games];
  newGames[index].predictedWinner = value;
      setGames(newGames);
    }

  return (
    <div>
      <div>
        {games.map((game, index) => (
          <Game key={index} index={index} game={game} handleChange={handleChange} />
        ))}
      </div>
    </div>
  );
}

export default App;
