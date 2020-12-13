import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'

const APILINK = 'http://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';


const GameBox = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(APILINK)
        const data = result.data.events
    
        let newGames = [];
        for(let i = 0; i < data.length; i++){
          newGames.push(data[i].name);
        }
    
        let schedule = newGames.map(game => {
          let split = game.split(' at ');
          return { 
            away: split[0],
            home: split[1],     
            favorite: '',
            odds: ''
          }
        }); 
        setGames(schedule)
      }
      fetchItems();
    },[])
    
    const handleFavorite = (index, favorite) => {
      const newGames = [...games];
      newGames[index].favorite = favorite;
          setGames(newGames);
        }

    const handleOdds = (index, odds) => {
      const newGames = [...games];
      newGames[index].odds = odds;
          setGames(newGames);
        }

/* const pickFunction = () => {
    if(odds === null || favorite === "xxxx") {alert("Set Probability and Favorite")};

    //Random number generated to test against favorite odds in probability variable 
    let mathPick = Math.floor(Math.random() * 100);
    console.log(mathPick)

    //Switches predicted winner if math variable is higher than favorite odds
    if(favorite === game.home){
        if(mathPick >= odds){
            setWinner(game.away)
        } else {
            setWinner(game.home)
        }
    } else if(favorite === game.away){
        if(mathPick >= odds){
            setWinner(game.home)
        } else {
            setWinner(game.away)
        }
    }
} */

    return (
        <div>
            <div>
                {games.map((game, index) => (
                    <Game
                      key={index} 
                      index={index} 
                      game={game} 
                      handleFavorite={handleFavorite}
                      handleOdds={handleOdds}
                    />
                ))}
             </div>
        </div>
    )
}


export default GameBox
