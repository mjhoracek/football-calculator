import React, { useState } from 'react'
import styled from 'styled-components'

const Teams = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: center;
    background-color: lightblue;
    h3 {
        margin-left: 15px;
        margin-right: 15px;
    }
`

const Game = ({index, game, handleChange }) => {
const [predict, setPredict] = useState("xxxx")
const [probability, setProbability] = useState('xxxx')

const handleSubmit = e => {
    e.preventDefault();
    if(predict === "xxxx") return;
    handleChange(index, predict)
}


    return (
        <div >
            <Teams>
                <h3>{game.home}</h3>
                <h3>VS</h3>
                <h3>{game.away}</h3>
            </Teams>

            <form onSubmit={handleSubmit}>
                <input 
                    type="radio" 
                    id="radio" 
                    name="winnerInput"
                    value={predict}
                    onChange={e => setPredict(game.home)}
                />
                <label for="Away">Away</label>
                <input 
                    type="radio" 
                    id="radio" 
                    name="winnerInput"
                    value={predict}
                    onChange={e => setPredict(game.away)}
                />
                <label for="Home">Home</label>
            
                <input 
                    type="number" 
                    name="probablity"
                    value={probability}
                    id="odds" 
                    min="0" 
                    max="100"
                    onChange={e => setProbability(e.target.value)}
                />
                <label for="odds">Enter Win Probability</label>

                <input type="submit" value="Confirm" />
            </form>

                <div style={{backgroundColor: "lightblue"}}>
                    The Predicted Winner is: {game.predictedWinner} 
                </div>
                
            <h1>{probability}, {predict} </h1>
         </div>
    )
}

export default Game
