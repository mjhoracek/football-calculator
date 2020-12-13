import React, { useState, useEffect } from 'react'
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

const Game = ({index, game, handleFavorite, handleOdds }) => {
const [favorite, setFavorite] = useState(null)
const [odds, setOdds] = useState(null)

useEffect(() => {
    handleFavorite(index, favorite);
    handleOdds(index, odds);
}, [favorite, odds])
 

    return (
        <div>
            <Container>
                <Teams>
                    <h3>{game.away}</h3>
                    <h3>VS</h3>
                    <h3>{game.home}</h3>
                </Teams>

            <Form>
            <form>
                <input 
                    type="radio" 
                    id="radio" 
                    name="winnerInput"
                    value={favorite}
                    onChange={e => {
                        setFavorite(game.away);
                        handleFavorite(index, favorite);
                        }
                    }
                />
                <label for="Away">Away</label>
                <input 
                    type="radio" 
                    id="radio" 
                    name="winnerInput"
                    value={favorite}
                    onChange={e => {
                        setFavorite(game.home);
                        handleFavorite(index, favorite);
                        }
                    }
                />
                <label for="Home">Home</label>
            
                <input 
                    type="number" 
                    name="probablity"
                    value={odds}
                    id="odds" 
                    min="0" 
                    max="100"
                    onChange={e => {
                        setOdds(e.target.value);
                        handleOdds(index, odds);
                        }
                    }
                />
                <label for="odds">Enter Win Probability</label>

                <input type="submit" value="Confirm" />
            </form>
            </Form> 
                <div>
                    The Predicted Winner is: {favorite} 
                </div>
                </Container>
         </div>
    )
}

export default Game
