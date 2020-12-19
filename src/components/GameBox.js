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
            odds: '',
            winner: ''
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


    const pickFunction = () => {
      let infoAlert = 'Favorite/Odds Not Entered';

            setGames(games.map(game => {

            //check if user inputed all the info for each game
            if(game.odds === '' || game.favorite === ''){
              return {...game, winner: infoAlert};
            };
            
            //Random number generated to test against favorite odds in probability variable 
            let mathPick = Math.floor(Math.random() * 100);

            //Determine winner with mathPick random number
            if(game.favorite === game.home){
              if(mathPick >= game.odds){
                  return {...game, winner: game.away}
              } else {
                return {...game, winner: game.home}
              }
          } else if(game.favorite === game.away){
              if(mathPick >= game.odds){
                return {...game, winner: game.home}
              } else {
                  return {...game, winner: game.away}
              }
          }

          }));
    }

    const handleSubmit = e => {
      e.preventDefault();
      pickFunction();
    }

    const resetButton = e => {
      setGames(games.map(game => {
        return {
          ...game,
          favorite: '',
          odds: '',
          winner: ''
        }
      }
        )
      )
    }

    return (
        <div>
            <button type="button" onClick={resetButton}>Reset</button>
            <form onSubmit={handleSubmit}>
              <button type="submit" >Calculate</button>
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
             </form>
        </div>
    )
}


export default GameBox
