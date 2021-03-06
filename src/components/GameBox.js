import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Game from './Game'
import styled from 'styled-components'

const APILINK = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

//Styled Components

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  min-width: 100px;
  height: 30px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 20px 20px;
  background-color: rgb(2,90,0);
  color: white;


    :hover  {
      transform: scale(1.1);
    }
`
const Radios = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: white;
`



const GameBox = () => {
    const [games, setGames] = useState([]);
    const [oddsType, setOddsType] = useState('percentage')

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
            winner: '',
            upset: false
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
                  return {...game, winner: game.away, upset: true}
              } else {
                return {...game, winner: game.home, upset: false}
              }
          } else if(game.favorite === game.away){
              if(mathPick >= game.odds){
                return {...game, winner: game.home, upset: true}
              } else {
                  return {...game, winner: game.away, upset: false}
              }
          } 
            return game;
          }));
    }

    const handleSubmit = e => {
      e.preventDefault();
      pickFunction();
    }

    const resetButton = e => {
      e.preventDefault();
      setGames(games.map(game => {
        return {
          ...game,
          favorite: '',
          odds: '',
          winner: '',
          upset: false
        }
      }
        )
      )
    }

    return (
        <div>
            <Radios>
              <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
                <label for="percentage">Percentage</label>
                <input 
                    type="radio"
                    id="percentage"
                    name='oddSelector'
                    value={(oddsType === 'percentage') ? true : false}
                    onChange={ () => setOddsType("percentage")}
                />
              </div>
                
              <div style={{paddingLeft: '30px', paddingRight: '30px'}}>
                <label for="spread">Spread</label>
                <input 
                    type="radio"
                    id="spread"
                    name='oddSelector'
                    value={(oddsType === 'spread') ? true : false}
                    onChange={ () => setOddsType('spread')}
                />
              </div>
            </Radios>

            <form onSubmit={handleSubmit}>
              <div style={{  display: 'flex', justifyContent: "center"}}>
                <Button className="submit">Calculate</Button>
                <Button classname="reset" style={{backgroundColor: 'rgb(90,0,0'}} type="button" onClick={resetButton}>Reset</Button>
              </div>
            <div>
                {games.map((game, index) => (
                    <Game
                      key={index} 
                      index={index} 
                      game={game}
                      games={games} 
                      setGames={setGames}
                      handleFavorite={handleFavorite}
                      handleOdds={handleOdds}
                      oddsType={oddsType}
                      setOddsType={setOddsType}
                    />
                ))}
             </div>
             </form>
        </div>
    )
}


export default GameBox
