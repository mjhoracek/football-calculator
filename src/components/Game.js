import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//Styled Components
const Container = styled.div`
    background-color: rgb(34, 92, 146);
    display: flex;
    justify-content: center;
`

const SelectTeams = styled.div`
    display: flex;
    background-color: gray;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    box-shadow: 3px 3px 15px 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: white;
    width: 40vw;
        .radio{
            margin-right: 10px;
            max-width: 200px;
            background-color: red;
        }
  `     

const SelectOdds = styled.div`
    display: flex;
    min-height: 50px;
    padding: 10px 10px;
    flex-direction: column;
    justify-content: center;
    box-shadow: 3px 3px 15px 0px;
    align-items: center;
    padding: 5px 5px;
    margin: 10px;
    background-color: #dfdfdf;
        label input {
            display: inline;
        }
`

const ProjectedWinner = styled.div`
    margin: 10px;
    min-width: 200px;
    padding: 10px 10px;
    box-shadow: 3px 3px 15px 0px;
    background-color: #dfdfdf;
`

//Game Component 
const Game = ({index, game, handleFavorite, handleOdds }) => {
const [favorite, setFavorite] = useState('')
const [odds, setOdds] = useState('')

useEffect(() => {
    handleFavorite(index, favorite);
    handleOdds(index, odds);
}, [favorite, odds])

    return (
        <Container>
                <SelectTeams>
                    <div>
                        <label for="away">{game.away}</label>
                        <input 
                            type="radio" 
                            name={index}
                            id='away'
                            value={favorite === game.away ? true : false}
                            className="radio"
                            onChange={e => {
                                setFavorite(game.away);
                                handleFavorite(index, favorite);
                                }
                            }
                        />
                    </div>
                    <div>         
                        <label for="home">{game.home}</label>
                        <input 
                            type="radio"
                            name={index}
                            id='home'
                            value={favorite === game.home ? true : false}
                            className="radio"
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
                    The Predicted Winner is: <br />  {game.winner}
                </ProjectedWinner>

        </Container>
    )
}

export default Game
