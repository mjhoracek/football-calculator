import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//Styled Components
const Container = styled.div`
    background-color: rgb(34, 92, 146);
    display: flex;
    justify-content: center;
`

const SelectTeams = styled.div`
    margin: 10px;
    border: 3px solid #333;
    background-color: #dfdfdf;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    width: 40vw;
`

const SelectOdds = styled.div`
    margin: 10px;
    border: 3px solid #333;
    background-color: #dfdfdf;
`

const ProjectedWinner = styled.div`
    margin: 10px;
    border: 3px solid #333;
    background-color: #dfdfdf;
`

//Game Component 
const Game = ({index, game, handleFavorite, handleOdds }) => {
const [favorite, setFavorite] = useState(null)
const [odds, setOdds] = useState(null)


useEffect(() => {
    handleFavorite(index, favorite);
    handleOdds(index, odds);
}, [favorite, odds])
 

    return (
        <Container>
                <SelectTeams>
                    <h3>Select The Favorite</h3>

                    <div>
                        <label for="away">{game.away}</label>
                        <input 
                            type="radio" 
                            name="winnerInput"
                            id='away'
                            value={favorite}
                            onChange={e => {
                                setFavorite(game.away);
                                handleFavorite(index, favorite);
                                }
                            }
                        />

                        <label for="home">{game.home}</label>
                        <input 
                            type="radio"
                            name="winnerInput"
                            id='home'
                            value={favorite}
                            onChange={e => {
                                setFavorite(game.home);
                                handleFavorite(index, favorite);
                                }
                            }
                        />
                    </div>
                </SelectTeams>

                <SelectOdds>
                    <label for="odds">Enter Win Probability</label>
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
                </SelectOdds>   
                 
                <ProjectedWinner>
                    The Predicted Winner is: <br /> {game.winner} 
                </ProjectedWinner>
        </Container>
    )
}

export default Game
