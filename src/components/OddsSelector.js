import React, { useState } from 'react'

const spreadTable = [[-0.5, 50], [-1.0, 60]];

const OddsSelector = ( {index, game, handleOdds }) => {
const [inputType, setInputType] = useState("percentage")

const lookupSpread = (userInput) => {
    const spreadPercentage = spreadTable.filter(array => array[0] === userInput)[1];

    return spreadPercentage;
}


if(inputType === 'percentage'){
    return (
        <div>
                <label for="percentage">Percentage</label>
                <input 
                    type="radio"
                    id="percentage"
                    name={game.home}
                    value={(inputType === 'percentage') ? true : false}
                    onChange={ () => setInputType("percentage")}
                />

                <label for="spread">Spread</label>
                <input 
                    type="radio"
                    id="spread"
                    name={game.home}
                    value={(inputType === 'spread') ? true : false}
                    onChange={ () => setInputType('spread')}
                />

                <br/>

                <label style={{marginBottom: "3px"}} for="odds">Enter Win Probability</label>
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
                />
        </div>
    )
}

if(inputType === 'spread'){
    return (
        <div>
                <label for="percentage">Percentage</label>
                <input 
                    type="radio"
                    id="percentage"
                    name={game.home}
                    value={(inputType === 'percentage') ? true : false}
                    onChange={() => setInputType("percentage")}
                />

                <label for="spread">Spread</label>
                <input 
                    type="radio"
                    id="spread"
                    name={game.home}
                    value={(inputType === 'spread') ? true : false}
                    onChange={ () => setInputType('spread')}
                />
                
                <br/>

                <label style={{marginBottom: "3px"}} for="odds">Enter Win Probability</label>
                <select
                    name="probablity"
                    value={game.odds}
                    id="odds" 
                    style={{width: "40%"}}
                    onChange={e => {
                        handleOdds(index, lookupSpread(e.target.value));
                        }
                    }
                >
                    <option value={-0.5}>-0.5</option>
                    <option value={-1.0}>-1.0</option>
{/*                 <option value={-1.5}>-0.5</option>
                    <option value={-2.0}>-0.5</option>
                    <option value={-2.5}>-0.5</option> */}
                </select>
        </div>
    )
}
}

export default OddsSelector
