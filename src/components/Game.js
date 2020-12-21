import React from 'react'
import styled from 'styled-components'
import OddsSelector from './OddsSelector'

//Styled Components
const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 90vw;

    @media (max-width: 960px){
        font-size: 10px;
    }
`

const SelectTeams = styled.div`
    display: flex;
    background-color: rgb(17,22,25,100);
    color: white;
    flex-direction: row;
    justify-content: center;
    align-items: top;
    margin: 10px;
    box-shadow: 3px 3px 15px 0px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
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
    min-width: 20vw;
    padding: 10px 10px;
    flex-direction: column;
    justify-content: center;
    box-shadow: 3px 3px 15px 0px;
    border-radius: 15px;
    align-items: center;
    padding: 5px 5px;
    margin: 10px;
    background-color: rgb(17,22,25,100);
    color: white;
        label input {
            display: inline;
        }
`

const ProjectedWinner = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    width: 20vw;
    min-height: 50px;
    border-radius: 15px;
    padding: 10px 10px;
    box-shadow: 3px 3px 15px 0px;
    background-color: rgb(17,22,25,100);
    color: white;
`

//Game Component 
const Game = ({index, game, handleFavorite, handleOdds }) => {

    return (
        <Container>
                <SelectTeams>
                    <div>
                        <label for="away">{game.away}</label>
                        <input 
                            type="radio" 
                            name={index}
                            id='away'
                            value={game.favorite === game.away ? true : false}
                            className="radio"
                            onClick={e => {
                                handleFavorite(index, game.away);
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
                            value={game.favorite === game.home ? true : false}
                            className="radio"
                            onClick={e => {
                                handleFavorite(index, game.home);
                                }
                            }
                        />
                    </div>
                </SelectTeams>

                <SelectOdds>
{/*                     <label style={{marginBottom: "3px"}} for="odds">Enter Win Probability</label>
                    <input 
                        type="number" 
                        name="probablity"
                        value={game.odds}
                        id="odds" 
                        min="0" 
                        max="100"
                        style={{width: "40%"}}
                        onChange={e => {
                            handleOdds(index, e.target.value);
                            }
                        }
                    /> */}
                    <OddsSelector index={index} game={game} handleOdds={handleOdds} />
                </SelectOdds>   
                 
                <ProjectedWinner>
                    The Predicted Winner is: <br />  {game.winner}
                </ProjectedWinner>

        </Container>
    )
}

export default Game
