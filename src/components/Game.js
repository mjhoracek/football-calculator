import React, { useState } from 'react'
import styled from 'styled-components'

const Teams = styled.div`
    display: flex;
    margin-top: 100px;
    justify-content: center;
    background-color: rgb(34, 92, 146);
    h3 {
        margin-left: 15px;
        margin-right: 15px;
    }
`

const Container = styled.div`
    background-color: rgb(34, 92, 146);
    color: white;
    font-weight: bold;
`

const Form = styled.div`
    display: block;
    flex-direction: column;
`

const Game = ({index, game, handleChange }) => {
const [predict, setPredict] = useState("xxxx")
const [probability, setProbability] = useState(null)

 
const pickFunction = () => {
    if(probability === null || predict === "xxxx") {alert("Set Probability and Favorite")};

    //Random number generated to test against favorite odds in probability variable 
    let mathPick = Math.floor(Math.random() * 100);
    console.log(mathPick)

    //Switches predicted winner if math variable is higher than favorite odds
    if(predict === game.home && mathPick >= probability){
        setPredict(game.away);
        console.log('upset');
    } else if(predict === game.away && mathPick >= probability){
        setPredict(game.home);
        console.log('upset');
    }
    
}


const handleSubmit = e => {
    e.preventDefault();
    pickFunction();
    handleChange(index, predict)
}


    return (
        <div>
            <Container>
                <Teams>
                    <h3>{game.home}</h3>
                    <h3>VS</h3>
                    <h3>{game.away}</h3>
                </Teams>

            <Form>
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
            </Form> 
                <div>
                    The Predicted Winner is: {game.predictedWinner} 
                </div>
                <h3>{predict}...{probability}</h3>
                </Container>
         </div>
    )
}

export default Game
